<script lang="ts">
    export let articles: {
        img: string;
        title: string;
        link: string;
    }[];
</script>

<section id="pickup" class="wrapper">
    {#each articles as article}
        <article>
            <img src={article.img} alt="pickup-img" />
            <h2>{article.title}</h2>
            <a href={article.link} class="read-more-link">READ MORE</a>
        </article>
    {/each}
</section>

<style>
    #pickup {
        padding-top: 120px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
        gap: 1rem;

        article {
            background: #fff8f1;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
    }

    /* スマホ用 */
    @media screen and (max-width: 767px) {
        #pickup {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }
</style>
