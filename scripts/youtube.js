
const videoGrid = document.querySelector('.js-video-grid');
let videosHTML = ``;
videoInfo.forEach((videoObject) => {
    videosHTML += `
        <div class="video-info-container">
            <div class="thumbnail-container">
                <img class="thumbnail-image" src="${videoObject.thumbnail}">
                <div class="video-duration">${videoObject.Duration}</div>
            </div>
            <div class="video-info">
                <img class="author-profile" src="${videoObject.authorProfile}">
                <div class="">
                    <div class="video-title">
                        <div>${videoObject.title}</div>
                    </div>
                    <div class="author-name">${videoObject.author}</div>
                    <div clsaa="video-metics">${videoObject.metrics}</div>
                </div>
                <img class="more-about-video" src="icons/more.svg">
            </div>
        </div>
    `;
    videoGrid.innerHTML = videosHTML;
});

