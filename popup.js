document.getElementById('hideRecommendedVideos').addEventListener('change', function(event) {
    const hide = event.target.checked;
    chrome.storage.sync.set({hideRecommendedVideos: hide}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    });
});

document.getElementById('hideHomepageRecommendations').addEventListener('change', function(event) {
    const hide = event.target.checked;
    chrome.storage.sync.set({hideHomepageRecommendations: hide}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    });
});

chrome.storage.sync.get(['hideRecommendedVideos', 'hideHomepageRecommendations'], function(data) {
    document.getElementById('hideRecommendedVideos').checked = data.hideRecommendedVideos !== false;
    document.getElementById('hideHomepageRecommendations').checked = data.hideHomepageRecommendations !== false;
});
