'use explicit'

CmdlineClss = require('./lib/hndlCmdLine');


console.log('1: output of args direct not using hndlCmdLine');
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


var Cmd = new CmdlineClss( process.argv );

console.log('2: output of args using hndlCmdLine.toString()');
console.log ( Cmd.toString() );


//test cmdn node index --n 100 --str \"hello dave\" --b --svr localhost:9000"


console.log(`--n found: ${Cmd.exists('--n')} valueOf=${Cmd.get('--n')}`);
console.log(`--str found: ${Cmd.exists('--str')} valueOf=${Cmd.get('--str')}`);
console.log(`--b found: ${Cmd.exists('--b')} `);
console.log(`--svr found: ${Cmd.exists('--svr')} ValueOf=${Cmd.get('--svr')} Svr Value:${Cmd.getPartOf('--svr',':',0)} PortValue:${Cmd.getPartOf('--svr',':',1)}`);



console.log(`--n Exist Test PASS[${Cmd.exists('--n')===true}]`);
console.log(`--n Value Test PASS[${Cmd.get('--n')==="100"}]`);

console.log(`--str Exist Test PASS[${Cmd.exists('--str')===true}]`);
console.log(`--str Value Test PASS[${Cmd.get('--str')==="hello dave"}]`);

console.log(`--b Exist Test PASS[${Cmd.exists('--b')===true}]`);


console.log(`--svr Exist Test PASS[${Cmd.exists('--svr')===true}]`);
console.log(`--svr Value Test PASS[${Cmd.get('--svr')==="localhost:9000"}]`);
console.log(`--svr Value[0] Test PASS[${Cmd.getPartOf('--svr',':',0)==="localhost"}]`);
console.log(`--svr Value[1] Test PASS[${Cmd.getPartOf('--svr',':',1)==="9000"}]`);