const formatVolumeIconPath = require('../assets/scripts/main')

describe('Testing the formatVolumeIconPath function', () => {

  test('Testing on volumeValue = 67; should get file volume-level-3', () =>{
    const volume = 67;
    const iconFileName = 'volume-level-3';
    expect(formatVolumeIconPath(volume)).toMatch(iconFileName);
  });

  test('Testing on volumeValue = 34; should get file volume-level-2', () =>{
    const volume = 34;
    const iconFileName = 'volume-level-2';
    expect(formatVolumeIconPath(volume)).toMatch(iconFileName);
  });

  test('Testing on volumeValue = 1; should get file volume-level-1', () =>{
    const volume = 1;
    const iconFileName = 'volume-level-1';
    expect(formatVolumeIconPath(volume)).toMatch(iconFileName);
  });

  test('Testing on volumeValue = 0; should get file volume-level-0', () =>{
    const volume = 0;
    const iconFileName = 'volume-level-0';
    expect(formatVolumeIconPath(volume)).toMatch(iconFileName);
  });
});