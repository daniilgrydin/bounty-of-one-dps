function calculateDPS(
  baseDamage,
  attackSpeed,
  criticalChance,
  criticalMultiplier,
  stage,
  pierceCount,
  bounceCount
) {
  // Convert percentages to decimals
  criticalChance /= 100;
  criticalMultiplier /= 100;

  // Limit pierce and bounce based on stage level
  pierceCount = Math.min(pierceCount, stage * 2);
  bounceCount = Math.min(bounceCount, stage * 2 - pierceCount);
  criticalChance = Math.min(criticalChance, 1); // Ensure crit chance does not exceed 100%

  // Calculate effective damage considering critical hits
  let effectiveDamage =
    baseDamage + criticalChance * criticalMultiplier * baseDamage;

  // Adjust damage based on enemy health thresholds
  const enemyHealth = healths[stage - 1];
  if (effectiveDamage > enemyHealth * 3) {
    effectiveDamage = enemyHealth * 0.85 + effectiveDamage * 0.15;
  } else if (effectiveDamage > enemyHealth * 2) {
    effectiveDamage = enemyHealth * 0.7 + effectiveDamage * 0.3;
  } else if (effectiveDamage > enemyHealth) {
    effectiveDamage = enemyHealth * 0.5 + effectiveDamage * 0.5;
  }

  // Calculate final DPS considering attack speed, pierce, and bounce effects
  return (
    effectiveDamage *
    attackSpeed *
    (1 + (pierceCount * stage) / 6 + (bounceCount * stage) / 6)
  );
}

function calculateRanking() {
  const includeSpecial = document.getElementById("include_special").checked;
  const baseDPS = calculateDPS(
    parseFloat(document.getElementById("damage").value) || 0,
    parseFloat(document.getElementById("attack_speed").value) || 0,
    parseFloat(document.getElementById("crit_chance").value) || 0,
    parseFloat(document.getElementById("crit_damage").value) || 0,
    parseFloat(document.getElementById("stage").value) || 0,
    parseFloat(document.getElementById("pierce").value) || 0,
    parseFloat(document.getElementById("bounce").value) || 0
  );

  const rankedupgrades_high = upgrades_high
    .filter((upgrade) => includeSpecial || !upgrade.special)
    .map((upgrade) => {
      let newStats = {
        damage: parseFloat(document.getElementById("damage").value) || 0,
        attack_speed:
          parseFloat(document.getElementById("attack_speed").value) || 0,
        crit_chance:
          parseFloat(document.getElementById("crit_chance").value) || 0,
        crit_damage:
          parseFloat(document.getElementById("crit_damage").value) || 0,
        stage: parseFloat(document.getElementById("stage").value) || 0,
        pierce: parseFloat(document.getElementById("pierce").value) || 0,
        bounce: parseFloat(document.getElementById("bounce").value) || 0,
      };
      newStats[upgrade.type] += upgrade.value;
      newStats[upgrade.type] = Math.round(newStats[upgrade.type] * 100) / 100;

      let newDPS = calculateDPS(
        newStats.damage,
        newStats.attack_speed,
        newStats.crit_chance,
        newStats.crit_damage,
        newStats.stage,
        newStats.pierce,
        newStats.bounce
      );
      return { ...upgrade, dpsIncrease: newDPS - baseDPS };
    })
    .sort((a, b) => b.dpsIncrease - a.dpsIncrease);

  const upgrades_highDiv = document.getElementById("upgrades_high");
  upgrades_highDiv.innerHTML = "";
  let minDPS = rankedupgrades_high[rankedupgrades_high.length - 1].dpsIncrease;
  let maxDPS = rankedupgrades_high[0].dpsIncrease;
  rankedupgrades_high.forEach((upgrade) => {
    const upgradeElement = document.createElement("div");
    upgradeElement.className = "upgrade";
    // upgradeElement.onclick = () => applyUpgrade(upgrade);

    const barContainer = document.createElement("div");
    barContainer.className = "bar-container";

    const bar = document.createElement("div");
    bar.className = "bar";
    if (upgrade.dpsIncrease > 0)
      bar.style.background =
        "linear-gradient(to right, #8b0000 0%, #ff0000 100%);";
    else
      bar.style.background =
        "linear-gradient(to right, #0b6e48 0%, #80e3bb 100%);";
    bar.style.width = `${Math.abs(
      ((upgrade.dpsIncrease - minDPS) / (maxDPS - minDPS)) * 100
    )}%`;

    barContainer.appendChild(bar);

    const imgElement = document.createElement("img");
    imgElement.src = upgrade.img;
    imgElement.alt = upgrade.name;
    imgElement.onclick = () => applyUpgrade(upgrade);
    upgradeElement.appendChild(imgElement);

    upgradeElement.appendChild(barContainer);

    upgrades_highDiv.appendChild(upgradeElement);
  });
}

function applyUpgrade(upgrade) {
  const statElement = document.getElementById(upgrade.type);
  statElement.value = (parseFloat(statElement.value) || 0) + upgrade.value;
  calculateRanking();
}

function applyPreset(presetIndex) {
  const preset = presets[presetIndex - 1];
  document.getElementById("damage").value =
    Math.round(preset.damage * 100) / 100;
  document.getElementById("attack_speed").value =
    Math.round(preset.attack_speed * 100) / 100;
  document.getElementById("crit_chance").value =
    Math.round(preset.crit_chance * 100) / 100;
  document.getElementById("crit_damage").value =
    Math.round(preset.crit_damage * 100) / 100;
  document.getElementById("pickup_range").value =
    Math.round(preset.pickup_range * 100) / 100;
  document.getElementById("cooldown").value =
    Math.round(preset.cooldown * 100) / 100;
  document.getElementById("bounce").value =
    Math.round(preset.bounce * 100) / 100;
  document.getElementById("pierce").value =
    Math.round(preset.pierce * 100) / 100;

  // Remove "selected" class from any previously selected preset
  const previouslySelected = document.querySelector(".selected");
  if (previouslySelected) {
    previouslySelected.classList.remove("selected");
  }

  // Add "selected" class to the currently selected preset
  const currentPresetElement = document.querySelector(
    `[data-index='${presetIndex}']`
  );
  if (currentPresetElement) {
    currentPresetElement.classList.add("selected");
  }

  updateStageImage();
  calculateRanking();
}

function updateStageImage() {
  const stage = document.getElementById("stage").value;
  document.querySelector(
    ".level-stat img[alt='Stage']"
  ).src = `stages/stage${stage}.png`;
}
