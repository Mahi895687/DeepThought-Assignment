import { Selector } from "testcafe";
fixture `Auatomate Login and Registration form`
.page("https://dev.deepthought.education/login")
test('Login with valid username and password',async t=>{
    await t
    .typeText(Selector('#username'),'mohinikesgire14@gmail.com')
    .typeText(Selector('#password'),'Thethought$5678')
    .click(Selector('.btn'))
    .wait(2000)
    .expect(Selector('h5').withText('Welcome to DeepThought').exists).ok();
});


test('Login with Invalid username and password',async t=>{
    await t
    .typeText(Selector('#username'),'akash@gmail.com')
    .typeText(Selector('#password'),'Thethought$5')
    .click(Selector('.btn'))
    .wait(3000)
    .expect(Selector('p').withText('Invalid login credentials').exists).ok();
});


test('Password entered is too short',async t=>{
    await t
    .typeText(Selector('#username'),'akash@gmail.com')
    .typeText(Selector('#password'),'The')
    .click(Selector('.btn'))
    .wait(3000)
    .expect(Selector('p').withText('The password entered is too short, please pick a different password.').exists).ok();
});