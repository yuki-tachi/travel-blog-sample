<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Pickup from "./lib/Pickup.svelte";

  const articleCount = Math.floor(Math.random() * 3) + 3;
  console.log(articleCount);
  // ダミーデータ配列
  const pickUpArticles = Array.from({ length: articleCount }, (_, i) => ({
    img: `https://picsum.photos/400/200?random=${i + 1}`,
    title: getRandomTitle(),
    link: "#",
  }));

  function getRandomTitle() {
    const titles = [
      "絶景スポット特集",
      "おすすめカフェ巡り",
      "現地グルメレポート",
      "穴場観光ルート",
      "旅の持ち物リスト",
      "トラブル体験談",
      "フォトジェニックな旅",
    ];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  function getRandomText() {
    const samples = [
      "旅先で見つけた素敵なカフェについて紹介します。",
      "絶景スポットで撮影した写真をまとめました。",
      "現地のグルメをたっぷり堪能しました！",
      "おすすめの観光ルートを解説します。",
      "穴場スポットをこっそり教えます。",
      "旅の持ち物リストを公開します。",
      "現地でのトラブル体験談もシェアします。",
    ];
    return samples[Math.floor(Math.random() * samples.length)];
  }

  const containerCount = Math.floor(Math.random() * 3) + 2;
  const containerArticles = Array.from({ length: containerCount }, (_, i) => ({
    img: `https://picsum.photos/700/300?random=container_${i + 1}`,
    date: new Date().toLocaleString(),
    text: getRandomText(),
    title: getRandomTitle(),
    link: "#",
  }));
</script>

<header>
  <h1 class="wrapper">Travel blog sample</h1>

  <nav>
    <ul class="wrapper">
      <li><a href="#">NEW</a></li>
      <li><a href="#">COLUMN</a></li>
      <li><a href="#">SERIES</a></li>
      <li><a href="#">Q&A</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
</header>

<Pickup articles={pickUpArticles} />

<section class="wrapper" id="container">
  <main>
    {#each containerArticles as article}
      <article>
        <h2 class="article-title">
          <a href="#">{article.title}</a>
        </h2>
        <ul class="meta">
          <li>{article.date}</li>
          <li>カテゴリ1</li>
        </ul>
        <img src={article.img} alt="main-img" />
        <p class="text">
          {article.text}
        </p>
        <div class="read-more-link"><a href="#">READ MORE</a></div>
      </article>
    {/each}
  </main>
  <aside>
    <div class="author">
      <h2>AUTHOR</h2>
      <img src="https://picsum.photos/200" alt="author-img" />
      <p>著者名</p>
    </div>
    <div class="ad">
      <h2>AD</h2>
      <img src="https://picsum.photos/200" alt="ad-img" />
    </div>
    <div class="ranking">
      <h2>RANKING</h2>
      <ul class="menu-list">
        <li><a href="#">ランキング1</a></li>
        <li><a href="#">ランキング2</a></li>
        <li><a href="#">ランキング3</a></li>
        <li><a href="#">ランキング4</a></li>
        <li><a href="#">ランキング5</a></li>
      </ul>
    </div>
  </aside>
</section>

<footer>
  <div class="wrapper">
    <section class="content">
      <section>
        <h3>About</h3>
        <p class="read-the-docs">texttexttexttexttexttexttext</p>
      </section>
      <section>
        <h3>Menu</h3>
        <ul class="menu-list">
          <li><a href="#">NEW</a></li>
          <li><a href="#">CATEGORY</a></li>
          <li><a href="#">COLUMN</a></li>
          <li><a href="#">SERIES</a></li>
          <li><a href="#">Q&amp;A</a></li>
        </ul>
      </section>
      <section>
        <h3>Twitter</h3>
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=WhatsHappening&ref_src=twsrc%5Etfw"
          class="twitter-hashtag-button"
          data-show-count="false">Tweet #WhatsHappening</a
        ><script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </section>
    </section>
  </div>
</footer>

<style>
  header {
    position: fixed;
    width: 100%;
    line-height: 2;
    background-color: #cbcbcb;
    nav {
      background-color: #cd5500;
      padding-top: 6px;
      padding-bottom: 6px;
    }
    h1 {
      white-space: nowrap;
    }
    ul {
      display: flex;
      gap: 1rem; /* li同士の間隔 */
      list-style: none;
    }

    a {
      color: #fff;
    }
  }

  #container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  main {
    width: 80%;
    background: #fff8f1;
    border-radius: 8px;
    padding: 1rem;
    margin: 2rem 0;

    article {
      margin-bottom: 20px;
      .article-title {
        font-size: 1.2rem;
        /* margin-bottom: 10px; */
        a {
          text-decoration: none;
          color: #000;
        }
      }
      .meta {
        font-size: 0.8rem;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 0.5rem;
        margin-bottom: 10px;
      }
      img {
        width: 100%;
      }
      .text {
        margin-bottom: 10px;
      }
    }
  }

  aside {
    width: 20%;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  footer {
    .content {
      display: flex;
      justify-content: space-between;

      section {
        width: 30%;
      }
    }
  }

  .read-the-docs {
    color: #888;
  }

  /* スマホ用 */
  @media screen and (max-width: 767px) {
    #container {
      flex-direction: column;
      gap: 0;
    }

    main,
    aside {
      width: 100%;
      box-sizing: border-box;
    }

    footer {
      .content {
        flex-direction: column;
        section {
          width: 100%;
        }
      }
    }
  }
</style>
