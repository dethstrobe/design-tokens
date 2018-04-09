'use strict';

let originCWD;
const mockCWD = jest.fn(() => 'somePath');
beforeAll(() => {
  originCWD = global.process.cwd;
  global.process.cwd = mockCWD;
});

afterAll(() => {
  global.process.cwd = originCWD;
});

const mockReadDir = jest.fn(() =>
  Promise.resolve([
    'ic_ticket.svg',
    'ic_award.svg',
    'readme.md',
    'remember.coffee'
  ])
);

const mockReadFile = jest.fn();
mockReadFile.mockReturnValueOnce(
  Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?>
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
      <title>icon/details/ic_ticket</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="icon/details/ic_ticket" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M12.7133596,8.1066091 L5.10669052,8.1066091 L5.10669052,8.77328543 C6.3444699,9.50130871 6.9633596,10.571987 6.9633596,11.9853202 C6.9633596,13.3986535 6.3444699,14.5653202 5.10669052,15.4853202 L5.10669052,16.1065308 L12.7133596,16.1065308 L12.7133596,8.1066091 Z M14.7133596,8.1066091 L14.7133596,16.1065308 L19.1067267,16.1065308 L19.1066376,15.4399081 C18.0111189,14.5501828 17.4633596,13.3986535 17.4633596,11.9853202 C17.4633596,10.571987 18.0111189,9.50130871 19.1066376,8.77328543 L19.1067267,8.1066091 L14.7133596,8.1066091 Z M5.10666174,6.10659677 L19.1067297,6.10658128 C20.2112992,6.10658128 21.1067297,7.00201178 21.1067297,8.10658128 C21.1067297,8.10658644 21.1067297,8.1065916 21.1067297,8.10659677 L21.1066858,9.22617868 C21.1066823,9.68055991 20.8003329,10.0778187 20.3608742,10.1933104 C19.5247572,10.4130458 19.1066987,11.0508409 19.1066987,12.1066957 C19.1066987,13.1625511 19.5247576,13.8003463 20.3608754,14.0200813 C20.8003453,14.1355724 21.106702,14.5328405 21.1067056,14.9872323 L21.1067297,16.1067947 C21.1067383,17.2113642 20.2113147,18.1068016 19.1067452,18.1068102 C19.10674,18.1068102 19.1067349,18.1068102 19.1067297,18.1068102 L5.10666174,18.1068132 C4.00209224,18.1068132 3.10666174,17.2113827 3.10666174,16.1068132 C3.10666174,16.106807 3.10666174,16.1068009 3.10666174,16.1067947 L3.10670921,14.9872128 C3.10671341,14.5328314 3.41306327,14.1355728 3.85252218,14.0200813 C4.68863988,13.8003463 5.10669874,13.1625511 5.10669874,12.1066957 C5.10669874,11.0508403 4.68863984,10.4130451 3.85252204,10.1933101 C3.41305178,10.0778203 3.1066948,9.68055254 3.10669059,9.22616063 L3.10666174,8.10659677 C3.10665152,7.00202727 4.00207374,6.10658849 5.10664324,6.10657827 C5.10664941,6.10657827 5.10665557,6.10657827 5.10666174,6.10657827 L5.10666174,6.10659677 Z" id="Combined-Shape" fill="#333333" transform="translate(12.106696, 12.106696) rotate(-45.000000) translate(-12.106696, -12.106696) "></path>
      </g>
    </svg>
  `)
);
mockReadFile.mockReturnValueOnce(
  Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?>
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
      <title>icon/details/ic_award</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="icon/details/ic_award" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M19,5 L20,5 C20.5522847,5 21,5.44771525 21,6 L21,10 C21,10.5522847 20.5522847,11 20,11 L19,11 C18.9762852,11 18.9527631,10.9991745 18.929461,10.9975507 C18.4918898,14.0643995 16.0665076,16.4904816 13,16.9291111 L13,19 L15.5,19 C15.7761424,19 16,19.2238576 16,19.5 L16,20.5 C16,20.7761424 15.7761424,21 15.5,21 L8.5,21 C8.22385763,21 8,20.7761424 8,20.5 L8,19.5 C8,19.2238576 8.22385763,19 8.5,19 L11,19 L11,16.9291111 C7.93349244,16.4904816 5.50811016,14.0643995 5.07053895,10.9975507 C5.04723688,10.9991745 5.02371485,11 5,11 L4,11 C3.44771525,11 3,10.5522847 3,10 L3,6 C3,5.44771525 3.44771525,5 4,5 L5,5 L5,4.16666667 C5,3.52233446 5.52233446,3 6.16666667,3 L17.8333333,3 C18.4776655,3 19,3.52233446 19,4.16666667 L19,5 Z M7,5 L7,10 C7,12.7614237 9.23857625,15 12,15 C14.7614238,15 17,12.7614237 17,10 L17,5 L7,5 Z" id="Combined-Shape" fill="#333333"></path>
      </g>
    </svg>
  `)
);

jest.mock('fs-extra', () => {
  return {
    readFile: mockReadFile,
    readdir: mockReadDir
  };
});

jest.mock('path', () => {
  return {
    extname: jest.fn(fileName => fileName.substring(fileName.indexOf('.'))),
    basename: jest.fn((fileName, ext) => fileName.replace(ext, '')),
    join: jest.fn((a, b) => a + '/' + b)
  };
});

const mockWrite = jest.fn((a, b, cb) => cb(null));
jest.mock('node-yaml', () => {
  return {
    write: mockWrite
  };
});

const generateTokenFile = require('../lib/generateTokenFile');

test('Generate icon token file', async () => {
  const run = await generateTokenFile();
  expect(run).toBe('icons generated successfully');

  expect(mockWrite).toHaveBeenCalledTimes(1);
  expect(mockWrite.mock.calls[0][0]).toBe('somePath/token.yml');
  expect(mockWrite.mock.calls[0][1]).toEqual({
    global: { category: 'icon', platform: 'core', type: 'icon' },
    props: {
      ic_award: {
        value:
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill-rule='evenodd' d='M19 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1c-.024 0-.047 0-.07-.002A7.005 7.005 0 0 1 13 16.929V19h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11v-2.07a7.005 7.005 0 0 1-5.93-5.932A1.015 1.015 0 0 1 5 11H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v-.833C5 3.522 5.522 3 6.167 3h11.666C18.478 3 19 3.522 19 4.167V5zM7 5v5a5 5 0 0 0 10 0V5H7z'/%3e%3c/svg%3e"
      },
      ic_ticket: {
        value:
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill-rule='evenodd' d='M9.707 8.85l-5.379 5.378.472.471c1.39-.36 2.585-.04 3.584.959 1 1 1.387 2.262 1.162 3.787l.44.44 5.378-5.379-5.657-5.657zm1.414-1.415l5.657 5.657 3.107-3.107-.472-.471c-1.403.145-2.605-.281-3.604-1.28-1-1-1.37-2.145-1.11-3.434l-.471-.472-3.107 3.107zm-8.207 5.379l9.9-9.9a2 2 0 0 1 2.828 0l.792.792a1 1 0 0 1 .156 1.211c-.436.747-.28 1.493.466 2.24.747.747 1.494.902 2.24.466a1 1 0 0 1 1.212.157l.791.791a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-.791-.793a1 1 0 0 1-.157-1.21c.436-.747.28-1.494-.466-2.24-.747-.747-1.493-.903-2.24-.467a1 1 0 0 1-1.211-.156l-.792-.792a2 2 0 0 1 0-2.828z'/%3e%3c/svg%3e"
      },
      iconSize: { value: 24 }
    }
  });
});
