import { Selector } from 'testcafe';
fixture `Getting Started`
    .page `url`; //write here the url


test('check elements visibility', async t => {
    const logom = Selector('#logom').exists;
    const contact = Selector('#section-contact').exists;
    await t
    .expect(logom).ok()
    .expect(contact).ok();
    
})
   
test('arrows of "עבודות לדוכמא"', async t => {
    await t
        .click(Selector('img[alt="Right arrow"]'))
        .click(Selector('img[alt="left arrow"]'))
})

test('whatsapp button', async t => {
    await t
    .click(Selector('a[href="https://api.whatsapp.com/send?phone=972544945333"]'))
    .expect(Selector('#action-button').innerText).eql('המשיכו לשוחח');
})

test('contuct us', async t => {
    await t
        .typeText('#name', 'Batel Luzon')
        .typeText('#company', 'my company')
        .typeText('#email', 'bateluzoni@gmail.com')
        .typeText('#telephone', '0528197232')
        .click(Selector('span').withText('דברו איתנו'))
        .expect(Selector('span').innerText).eql('תודה!');        
})

test('talk to us sending', async t => {
    await t
        .typeText((Selector('input[name = "name"]')), "Batel Luzon")
        .typeText((Selector('input[name = "email"]')), "bateluzoni@gmail.com")
        .typeText((Selector('input[name = "phone"]')), "0528197232")
        .click(Selector('span').withText('שליחה'))
        .expect(Selector('span').innerText).eql('תודה!');
})







