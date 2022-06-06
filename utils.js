const emojis = {
  liftingWeights: '🏋️‍♂️',
  cartwheeling: '🤸',
  lotusPosition: '🧘',
  running: '🏃‍♀️',
  bath: '🛀',
  salad: '🥙',
  human: '🧍‍♀️'
};

module.exports = {
  monthMap: {
    1: 'янв',
    2: 'фев',
    3: 'мар',
    4: 'апр',
    5: 'мая',
    6: 'июня',
    7: 'июля',
    8: 'авг',
    9: 'сен',
    10: 'окт',
    11: 'ноя',
    12: 'дек',
  },
  weekMap: {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'cб',
    7: 'вск',
  },
  chatOptions: [
    `Считала калории ${emojis.salad}`,
    `Делала зарядку ${emojis.lotusPosition}`,
    `Делала растяжку ${emojis.cartwheeling}`,
    `Делала упражнения ${emojis.liftingWeights}`,
    `Делала кардио ${emojis.running}`,
    `Делала планку ${emojis.human}`,
    `Отдыхала ${emojis.bath}`,
  ],
};
