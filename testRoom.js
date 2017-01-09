var Calendar = require('./room');

// var idCalendar = "8241fc38732002141317a107b7ce989cd1bb95aa76bef7d8013f8ecf19fbd900729809d86cd297df23343573b6d8e6dca84371115c57ce3f92b82f42d84baba9ad770359a5f53f56f7c903b47fbaea3f809e79060ee999f4df6c31ef932e3e6c85f2b25bc040fa19498424fc3aa6bf4a7b701a69e4929514a885d1cf1c1a74d421cc8a1e31f0ca00be7c9db77b1b15d9a47c1e9b682d7428126e69f83c1b3920dbf65ba57e2fd7f3995819b0e211f491b4ef9aba751bdce73a0eaecf799cbced50c55e7f25926a723ae4bd107b2ce328d4a2ff76e2f7d5696ca90484c4b2ac6af9c4bc151f5a34001d9b6310a318facbf377b612dec2c5fba5147d40716acb136310d0ae215603f5";
var idCalendar = "8241fc387320021490505f9a5167143de9c3bd72ae55c945119c94a4e4ca10a9c842f9f9f4c52cf70e3c7362addcee70af2e5271b7d9f5d6a78a7de7f43578e64ba18ba0fe71b19925c933d07c37de5a1cdad5504ad2f424f708bb109c51927eb2d39041b3001d5ef039ed4f30f5253bb1976c11f14fd6a0a77dd201c7828cbcb2f2bbdd1dc923bac6f9ea735524c7677125e8873a21e225a94ea143a514e97e67e2febb9c9cb242aa6ab1f86e04b0dbba8226c25382d19972dcdefa402bd824efe97f45a8df825fa1c65271eaf2718e661605276e58527baad35cf69655b32d5fe453874a0679870ce0d0f5caebef19aa6a9845b3c29ae6f72e8e81aeb572853b08ef95bccbd6d7424dd88d050b2b81bce5082ad6b9a1c4ada1f1f69ac0527e7b643e7ea0b0294d64ccfd53540caf4329e42a3586ec53810c6ef3e8612f5c2a5d342b193c7f5e30f2c161fd6762e2cec542a3ea88eddb0bfe1f96ba6f6089054f4ebf5ddfd49b43adf1a344df17bb8761918f339b17165c08c22ed36235b76067b3ce4c73d30e1b697da8f060b198750b7724b1752a8fd85d17721b71ea71690ef930d866402d097b1d901a8bfa631fd628db484a936744b93980939fd5edba693955dfb6006d1cc0b6ad440e66a0945c2198e6f9f5aa32646a9d5622ca8a3016f6dfa3d4c4dec746e84f7c9b78e263799f3e18454a68d7f9e7187a83de3688b2feb32c6fb898eca1d377f77fceb79b33135e66642c0dd1c49517ea8b2cbd3c32cc6302479afc71919bff1d45be9ae8e60515b6e78b2c9808fd79fda98b730694bb6243e276e3317980eb85acfaab89baf4b723d705849105948b9d2e01c48e2362962a37bcde48e3470b0abaf6152f4344026376f2d88a6a55e115128e38d4d6ac30895cb147fb9fd4ab68564015307f6337dad1d31583a2d30a798e161a5ff9373d5e13c78cb05d2619592881ee63ee8502e4e26de0b6627669509028e8430dbe363df4903d6deeda66081743739e32ab5ce751e5db85dc0c116b27188b7a2fd6390996e7e5cde5bcd93065741239d94f13c8024aff7aa923eb43d0c39eff1c7853a167934ca0bdfba825c0b489e150342cbf93b707a1504cdf3c1acef8543cfd5b81b930e6b64fdfbb1046e3de9bbcfeea78fed0a8b4";
// var salles = [ ];
var salles = ['B 024', 'B 029', 'B 005', 'B 022', 'B 028', 'B 035', 'B 037','B 126', 'B 141'];
var calendar = new Calendar(idCalendar, salles);
setTimeout(function(){
    console.log("update");
    Calendar.updateCalendar(calendar);
}, 10000);
setTimeout(function(){
    console.log(calendar.salles['B 126'].occupations[0]);
    var date = new Date(2017,0,9,12,59);
    console.log(date);
    var salles = calendar.sallesDisponibles(date.getTime())
    console.log(salles);
}, 20000);
