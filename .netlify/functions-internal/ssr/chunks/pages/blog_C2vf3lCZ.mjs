/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent } from '../astro__vVzI8bq.mjs';
import 'kleur/colors';
import { $ as $$Image, g as getCollection, a as $$Main, b as $$H1, c as $$Layout } from './_slug__BsREvVih.mjs';

const $$Astro$2 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 600, "height": 600 / 1.5, "class": "rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover" })} </a> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-4xl text-zinc-900 mb-4 font-semibold inline-block"> <h2>${post.data.title}</h2> </a> <p class="text-zinc-500 text-2xl mb-9 line-clamp-2"> ${post.body} </p> </article>`;
}, "D:/dev/wsjs/fc-astro/fcc-astro/src/components/Post.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-14 max-md:grid-cols-1 mb-24"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)} </div>`;
}, "D:/dev/wsjs/fc-astro/fcc-astro/src/components/PostList.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await getCollection("posts");
  console.log(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Rhythm Nation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation Blog" })} ${posts.map((post) => renderTemplate`${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}`)}` })} ` })}`;
}, "D:/dev/wsjs/fc-astro/fcc-astro/src/pages/blog.astro", void 0);

const $$file = "D:/dev/wsjs/fc-astro/fcc-astro/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
