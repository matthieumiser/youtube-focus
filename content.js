chrome.storage.sync.get(['hideRecommendedVideos', 'hideHomepageRecommendations'], function(data) {
    const hideElements = () => {
        if (data.hideRecommendedVideos !== false) {
            const recommendedVideoElement = document.querySelector('#items.style-scope.ytd-watch-next-secondary-results-renderer');
            if (recommendedVideoElement) {
                recommendedVideoElement.style.display = 'none';
            }
        }

        if (data.hideHomepageRecommendations !== false) {
            const homepageRecommendationElement = document.querySelector('#content.style-scope ytd-rich-grid-renderer');
            if (homepageRecommendationElement) {
                homepageRecommendationElement.style.display = 'none';
            }
        }
    };

    hideElements();

    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, { childList: true, subtree: true });
});
