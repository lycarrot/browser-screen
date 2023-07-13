const puppeteer = require("puppeteer");
const waitTime = (n) => new Promise((r) => setTimeout(r, n));

// 截图url
const base_url = "https://www.baidu.com/s?ie=UTF-8&wd=baidu";
// 截图保存文件夹
const file = "./file";

const main = async () => {
    // 打开浏览器
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(base_url);
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    // 确保页面加载完毕
    await waitTime(3000);

    const preName=new Date().getTime()
    // 页面截图
    await page.screenshot({
        path: `${file}/pic/${preName}.png`
    });
    // 或者，页面生成pdf
    await page.pdf({
        path: `${file}/pdf/${preName}.pdf`,
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log('finish')
    // 页面截图完成

};


main()