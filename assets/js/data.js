var keyData = {
  'q': 1,
  '2': 2,
  'w': 3,
  '3': 4,
  'e': 5,
  'r': 6,
  '5': 7,
  't': 8,
  '6': 9,
  'y': 10,
  '7': 11,
  'u': 12,
  'i': 13,
  '9': 14,
  'o': 15,
  '0': 16,
  'p': 17,
  '[': 18,
  '=': 19,
  ']': 20,
  'a': 9,
  'z': 10,
  's': 11,
  'x': 12,
  'c': 13,
  'f': 14,
  'v': 15,
  'g': 16,
  'b': 17,
  'n': 18,
  'j': 19,
  'm': 20,
  'k': 21,
  ',': 22,
  'l': 23,
  '.': 24,
  '/': 25,
};

var keys = [
  {
    position: 0,
    blackKey: false,
    note: 1,
    trigger1: 'q'
  },
  {
    position: 3,
    blackKey: true,
    note: 2,
    trigger1: '2'
  },
  {
    position: 4,
    blackKey: false,
    note: 3,
    trigger1: 'w'
  },
  {
    position: 7,
    blackKey: true,
    note: 4,
    trigger1: '3'
  },
  {
    position: 8,
    blackKey: false,
    note: 5,
    trigger1: 'e'
  },
  {
    position: 12,
    blackKey: false,
    note: 6,
    trigger1: 'r'
  },
  {
    position: 15,
    blackKey: true,
    note: 7,
    trigger1: '5'
  },
  {
    position: 16,
    blackKey: false,
    note: 8,
    trigger1: 't'
  },
  {
    position: 19,
    blackKey: true,
    note: 9,
    trigger1: '6',
    trigger2: 'a'
  },
  {
    position: 20,
    blackKey: false,
    note: 10,
    trigger1: 'y',
    trigger2: 'z'
  },
  {
    position: 23,
    blackKey: true,
    note: 11,
    trigger1: '7',
    trigger2: 's'
  },
  {
    position: 24,
    blackKey: false,
    note: 12,
    trigger1: 'u',
    trigger2: 'x'
  },
  {
    position: 28,
    blackKey: false,
    note: 13,
    trigger1: 'i',
    trigger2: 'c'
  },
  {
    position: 31,
    blackKey: true,
    note: 14,
    trigger1: '9',
    trigger2: 'f'
  },
  {
    position: 32,
    blackKey: false,
    note: 15,
    trigger1: 'o',
    trigger2: 'v'
  },
  {
    position: 35,
    blackKey: true,
    note: 16,
    trigger1: '0',
    trigger2: 'g'
  },
  {
    position: 36,
    blackKey: false,
    note: 17,
    trigger1: 'p',
    trigger2: 'b'
  },
  {
    position: 40,
    blackKey: false,
    note: 18,
    trigger1: '[',
    trigger2: 'n'
  },
  {
    position: 43,
    blackKey: true,
    note: 19,
    trigger1: '=',
    trigger2: 'j'
  },
  {
    position: 44,
    blackKey: false,
    note: 20,
    trigger1: ']',
    trigger2: 'm'
  },
  {
    position: 47,
    blackKey: true,
    note: 21,
    trigger2: 'k'
  },
  {
    position: 48,
    blackKey: false,
    note: 22,
    trigger2: ','
  },
  {
    position: 51,
    blackKey: true,
    note: 23,
    trigger2: 'l'
  },
  {
    position: 52,
    blackKey: false,
    note: 24,
    trigger2: '.'
  },
  {
    position: 56,
    blackKey: false,
    note: 25,
    trigger2: '/'
  }
]

var notes = {
  1: {
    sound: new Howl({
      src: ['assets/sounds/key-1.wav']
    }),
  }, 
  2: {
    sound: new Howl({
      src: ['assets/sounds/key-2.wav']
    }),
  }, 
  3: {
    sound: new Howl({
      src: ['assets/sounds/key-3.wav']
    }),
  },
  4: {
    sound: new Howl({
      src: ['assets/sounds/key-4.wav']
    }),
  },
  5: {
    sound: new Howl({
      src: ['assets/sounds/key-5.wav']
    }),
  },
  6: {
    sound: new Howl({
      src: ['assets/sounds/key-6.wav']
    }),
  },
  7: {
    sound: new Howl({
      src: ['assets/sounds/key-7.wav']
    }),
  },
  8: {
    sound: new Howl({
      src: ['assets/sounds/key-8.wav']
    }),
  },
  9: {
    sound: new Howl({
      src: ['assets/sounds/key-9.wav']
    }),
  },
  10: {
    sound: new Howl({
      src: ['assets/sounds/key-10.wav']
    }),
  },
  11: {
    sound: new Howl({
      src: ['assets/sounds/key-11.wav']
    }),
  },
  12: {
    sound: new Howl({
      src: ['assets/sounds/key-12.wav']
    }),
  },
  13: {
    sound: new Howl({
      src: ['assets/sounds/key-13.wav']
    }),
  },
  14: {
    sound: new Howl({
      src: ['assets/sounds/key-14.wav']
    }),
  },
  15: {
    sound: new Howl({
      src: ['assets/sounds/key-15.wav']
    }),
  },
  16: {
    sound: new Howl({
      src: ['assets/sounds/key-16.wav']
    }),
  },
  17: {
    sound: new Howl({
      src: ['assets/sounds/key-17.wav']
    }),
  },
  18: {
    sound: new Howl({
      src: ['assets/sounds/key-18.wav']
    }),
  },
  19: {
    sound: new Howl({
      src: ['assets/sounds/key-19.wav']
    }),
  },
  20: {
    sound: new Howl({
      src: ['assets/sounds/key-20.wav']
    }),
  },
  21: {
    sound: new Howl({
      src: ['assets/sounds/key-21.wav']
    }),
  },
  22: {
    sound: new Howl({
      src: ['assets/sounds/key-22.wav']
    }),
  },
  23: {
    sound: new Howl({
      src: ['assets/sounds/key-23.wav']
    }),
  },
  24: {
    sound: new Howl({
      src: ['assets/sounds/key-24.wav']
    }),
  },
  25: {
    sound: new Howl({
      src: ['assets/sounds/key-25.wav']
    }),
  },
  26: {
    sound: new Howl({
      src: ['assets/sounds/key-26.wav']
    }),
  },
  27: {
    sound: new Howl({
      src: ['assets/sounds/key-27.wav']
    }),
  },
  28: {
    sound: new Howl({
      src: ['assets/sounds/key-28.wav']
    }),
  },
  29: {
    sound: new Howl({
      src: ['assets/sounds/key-29.wav']
    }),
  },
  30: {
    sound: new Howl({
      src: ['assets/sounds/key-30.wav']
    }),
  },
  31: {
    sound: new Howl({
      src: ['assets/sounds/key-31.wav']
    }),
  },
  32: {
    sound: new Howl({
      src: ['assets/sounds/key-32.wav']
    }),
  },
  33: {
    sound: new Howl({
      src: ['assets/sounds/key-33.wav']
    }),
  },
  34: {
    sound: new Howl({
      src: ['assets/sounds/key-34.wav']
    }),
  },
  35: {
    sound: new Howl({
      src: ['assets/sounds/key-35.wav']
    }),
  },
  36: {
    sound: new Howl({
      src: ['assets/sounds/key-36.wav']
    }),
  },
  37: {
    sound: new Howl({
      src: ['assets/sounds/key-37.wav']
    }),
  },
  38: {
    sound: new Howl({
      src: ['assets/sounds/key-38.wav']
    }),
  },
  39: {
    sound: new Howl({
      src: ['assets/sounds/key-39.wav']
    }),
  },
  40: {
    sound: new Howl({
      src: ['assets/sounds/key-40.wav']
    }),
  },
  41: {
    sound: new Howl({
      src: ['assets/sounds/key-41.wav']
    }),
  },
  42: {
    sound: new Howl({
      src: ['assets/sounds/key-42.wav']
    }),
  },
  43: {
    sound: new Howl({
      src: ['assets/sounds/key-43.wav']
    }),
  },
  44: {
    sound: new Howl({
      src: ['assets/sounds/key-44.wav']
    }),
  },
  45: {
    sound: new Howl({
      src: ['assets/sounds/key-45.wav']
    }),
  },
  46: {
    sound: new Howl({
      src: ['assets/sounds/key-46.wav']
    }),
  },
  47: {
    sound: new Howl({
      src: ['assets/sounds/key-47.wav']
    }),
  },
  48: {
    sound: new Howl({
      src: ['assets/sounds/key-48.wav']
    }),
  },
  49: {
    sound: new Howl({
      src: ['assets/sounds/key-49.wav']
    }),
  },
  50: {
    sound: new Howl({
      src: ['assets/sounds/key-50.wav']
    }),
  },
  51: {
    sound: new Howl({
      src: ['assets/sounds/key-51.wav']
    }),
  },
  52: {
    sound: new Howl({
      src: ['assets/sounds/key-52.wav']
    }),
  },
  53: {
    sound: new Howl({
      src: ['assets/sounds/key-53.wav']
    }),
  },
  54: {
    sound: new Howl({
      src: ['assets/sounds/key-54.wav']
    }),
  },
  55: {
    sound: new Howl({
      src: ['assets/sounds/key-55.wav']
    }),
  },
  56: {
    sound: new Howl({
      src: ['assets/sounds/key-56.wav']
    }),
  },
  57: {
    sound: new Howl({
      src: ['assets/sounds/key-57.wav']
    }),
  },
  58: {
    sound: new Howl({
      src: ['assets/sounds/key-58.wav']
    }),
  },
  59: {
    sound: new Howl({
      src: ['assets/sounds/key-59.wav']
    }),
  },
  60: {
    sound: new Howl({
      src: ['assets/sounds/key-60.wav']
    }),
  },
  61: {
    sound: new Howl({
      src: ['assets/sounds/key-61.wav']
    }),
  },
};
