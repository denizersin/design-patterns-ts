//explain: when we want to control access to an object.
//example: we have a browser class and we want to control access to it.

interface Browser {
    open(url: string): void;
}

class Chrome implements Browser {
    open(url: string): void {
        console.log(`open ${url} with chrome`);
    }
}

class BrowserProxy implements Browser {
    private browser: Browser;
    bannedUrls: string[] = ['facebook.com', 'youtube.com'];
    constructor(browser: Browser) {
        this.browser = browser;
    }
    open(url: string): void {
        //this is the proxy part.
        //we can add some logic here to check browser version or something else.
        if (this.bannedUrls.includes(url)) {
            console.log('this url is banned');
            return;
        }
        this.browser.open(url);
    }
}

const chrome = new Chrome();
const browserProxy = new BrowserProxy(chrome);
browserProxy.open('facebook.com'); // this url is banned
browserProxy.open('google.com'); // open google.com with chrome