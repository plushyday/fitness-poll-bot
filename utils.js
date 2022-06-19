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
    0: 'янв',
    1: 'фев',
    2: 'мар',
    3: 'апр',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'авг',
    8: 'сен',
    9: 'окт',
    10: 'ноя',
    11: 'дек',
  },
  weekMap: {
    0: 'вск',
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'cб',
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
