import UisApi from '../src/uis';

async function test() {
	const uis = new UisApi({ username: process.env.CZUNAME, password: process.env.CZUPASSWORD });

	await uis.login();
	console.log(await uis.getTimetable(new Date()));
}
test();
