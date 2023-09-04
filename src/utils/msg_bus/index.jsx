/*global chrome*/

const chromeSendMessage = (msg) => {
    if(chrome && chrome.runtime){
        chrome.runtime.sendMessage(msg);
    } else {
        console.log("chrome.runtime not found");
    }
};

const chromeTabMessage = (msg) => {
    if(chrome && chrome.tabs){
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const [tab] = tabs;
            chrome.tabs.sendMessage(tab.id, msg);
          });
    } else {
        console.log("chrome.tabs not found");
    }

};


const msgContentScript = (msg) => {
    chromeTabMessage(msg);
};



export { msgContentScript};