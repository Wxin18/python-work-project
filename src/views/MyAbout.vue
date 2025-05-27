<template>
  <div class="about-page">
    <div class="container">
      <!-- 左侧个人信息栏 -->
      <aside class="sidebar">
        <div class="profile-card">
          <img 
            src="https://picsum.photos/seed/profile/200/200" 
            alt="个人头像" 
            class="avatar"
          />
          <h2 class="name">Jane Doe</h2>
          <p class="title">Vue.js 开发者 & 技术博主</p>
          
          <!-- 个人基本信息 -->
          <div class="personal-info">
            <div class="info-item">
              <span class="info-label">年龄：</span>
              <span class="info-value">28</span>
            </div>
            <div class="info-item">
              <span class="info-label">学校：</span>
              <span class="info-value">某某大学</span>
            </div>
            <div class="info-item">
              <span class="info-label">专业：</span>
              <span class="info-value">计算机科学与技术</span>
            </div>
            <div class="info-item">
              <span class="info-label">兴趣爱好：</span>
              <span class="info-value">编程、阅读、旅行</span>
            </div>
          </div>
          
          <!-- 座右铭 -->
          <div class="motto">
            <i class="fa fa-quote-left"></i>
            <p>代码是写给人看的，只是恰好能被机器执行。</p>
            <i class="fa fa-quote-right"></i>
          </div>
          
          <!-- 技能标签 -->
          <div class="skills">
            <h3>专业技能</h3>
            <div class="skill-tags">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">HTML/CSS</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Vue Router</span>
              <span class="skill-tag">Pinia</span>
              <span class="skill-tag">Vite</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧个人日志 -->
      <main class="main-content">
        <h1 class="page-title">关于我</h1>
        
        <!-- 自我介绍 -->
        <section class="intro">
          <h2 class="section-title">自我介绍</h2>
          <div class="section-content">
            <p>你好！我是 Jane Doe，一名热爱前端开发的技术博主。目前专注于 Vue.js 生态系统的应用与研究。</p>
            <p>自2016年接触编程以来，我不断探索Web开发的无限可能，从最初的HTML/CSS基础，到如今深入研究框架和工具链，每一步都让我更加热爱这个领域。</p>
          </div>
        </section>
        
        <!-- 编程经历 -->
        <section class="programming">
          <h2 class="section-title">编程经历</h2>
          <div class="section-content">
            <p>我对编程的兴趣始于大学时期的一次偶然机会，从此便一发不可收拾。</p>
            <p>我特别喜欢 Vue.js 框架，因为它的直观性和灵活性让我能够高效地构建用户界面。通过这个博客，我希望能够分享自己的学习经验和项目实践，帮助更多人快速上手 Vue.js 和现代前端开发。</p>
            <p>除了技术本身，我也热衷于探索如何编写更优雅、更易维护的代码，以及如何提升团队的开发效率。</p>
          </div>
        </section>
        
        <!-- 相册 -->
        <section class="photo-album">
          <h2 class="section-title">相册</h2>
          <div class="photo-grid">
            <img src="https://picsum.photos/seed/photo1/300/200" alt="照片1" class="photo-item">
            <img src="https://picsum.photos/seed/photo2/300/200" alt="照片2" class="photo-item">
            <img src="https://picsum.photos/seed/photo3/300/200" alt="照片3" class="photo-item">
            <img src="https://picsum.photos/seed/photo4/300/200" alt="照片4" class="photo-item">
            <img src="https://picsum.photos/seed/photo5/300/200" alt="照片5" class="photo-item">
            <img src="https://picsum.photos/seed/photo6/300/200" alt="照片6" class="photo-item">
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: 'Jane Doe',
        title: 'Vue.js 开发者 & 技术博主',
        age: 28,
        university: '某某大学',
        major: '计算机科学与技术',
        hobbies: '编程、阅读、旅行',
        motto: '代码是写给人看的，只是恰好能被机器执行。',
        skills: ['Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js', 'Vue Router', 'Pinia', 'Vite']
      },
      intro: {
        content: [
          '你好！我是 Jane Doe，一名热爱前端开发的技术博主。目前专注于 Vue.js 生态系统的应用与研究。',
          '自2016年接触编程以来，我不断探索Web开发的无限可能，从最初的HTML/CSS基础，到如今深入研究框架和工具链，每一步都让我更加热爱这个领域。'
        ]
      },
      programming: {
        content: [
          '我对编程的兴趣始于大学时期的一次偶然机会，从此便一发不可收拾。',
          '我特别喜欢 Vue.js 框架，因为它的直观性和灵活性让我能够高效地构建用户界面。通过这个博客，我希望能够分享自己的学习经验和项目实践，帮助更多人快速上手 Vue.js 和现代前端开发。',
          '除了技术本身，我也热衷于探索如何编写更优雅、更易维护的代码，以及如何提升团队的开发效率。'
        ]
      },
      photos: [
        'https://picsum.photos/seed/photo1/300/200',
        'https://picsum.photos/seed/photo2/300/200',
        'https://picsum.photos/seed/photo3/300/200',
        'https://picsum.photos/seed/photo4/300/200',
        'https://picsum.photos/seed/photo5/300/200',
        'https://picsum.photos/seed/photo6/300/200'
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 左侧边栏样式 */
.sidebar {
  position: sticky;
  top: 2rem;
  min-width: 280px;
}

.profile-card {
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: block;
  border: 4px solid #f0f4f8;
}

.name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #333;
}

.title {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.personal-info {
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  margin-bottom: 0.8rem;
}

.info-label {
  color: #666;
  min-width: 70px;
}

.info-value {
  color: #333;
}

.motto {
  background-color: #f9f9f9;
  border-left: 4px solid #1a73e8;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: #555;
  position: relative;
}

.motto i {
  color: #ccc;
  position: absolute;
  font-size: 1.2rem;
}

.motto i:first-child {
  top: 0.5rem;
  left: 0.5rem;
}

.motto i:last-child {
  bottom: 0.5rem;
  right: 0.5rem;
}

.skills {
  margin-top: 2rem;
}

.skills h3 {
  margin-bottom: 1rem;
  color: #333;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #e8f0fe;
  color: #1a73e8;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* 右侧主内容区样式 */
.main-content {
  flex: 1;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a73e8;
  border-bottom: 2px solid #f0f4f8;
  padding-bottom: 0.8rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  padding-left: 1rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.3rem;
  width: 4px;
  height: 1.2rem;
  background-color: #1a73e8;
  border-radius: 2px;
}

.section-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.section-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #444;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.photo-item {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  transition: transform 0.3s;
}

.photo-item:hover {
  transform: scale(1.05);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    min-width: auto;
  }
}
</style>