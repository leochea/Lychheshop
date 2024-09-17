document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化轮播图');

    const carousel = document.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    console.log('找到的轮播图片数量:', items.length);

    function showSlide(index) {
        console.log('显示幻灯片:', index);
        items.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        console.log('下一张幻灯片');
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        console.log('上一张幻灯片');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    if (prevButton && nextButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
        console.log('已添加按钮事件监听器');
    } else {
        console.error('未找到轮播图按钮');
    }

    // 初始显示第一张图片
    showSlide(currentIndex);

    // 自动轮播，每2秒切换一次
    setInterval(nextSlide, 2000);

    // 添加错误处理
    items.forEach(item => {
        item.addEventListener('error', function() {
            console.error('图片加载失败:', this.src);
            this.src = 'image/placeholder.jpg'; // 使用占位图
        });
    });

    console.log('轮播图初始化完成');
});