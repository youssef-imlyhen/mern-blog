
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = "mongodb+srv://usf:usf@cluster0.rjozu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// "mongodb+srv://usf:usf@cluster0.rjozu.mongodb.net/mern_blog?retryWrites=true&w=majority";
// "mongodb+srv://usf:<password>@cluster0.rjozu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"




const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);







import PostMessage from './models/post.js'
const createADemo =async () => {
  let obj = {
    title: "new psot", descreption: "latest app it's  adipisicing elit. Veniam dicta ipsum fugiat ea possimus quasi. Nemo odio eligendi reiciendis facilis doloremque debitis nam, itaque quae quibusdam at necessitatibus eius", selectedFile: "just a test", author: "it's me", content: `<h1 class="heading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quos!</h1>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta ipsum fugiat ea possimus quasi. Nemo odio eligendi reiciendis facilis doloremque debitis nam, itaque quae quibusdam at necessitatibus eius distinctio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum cum, ducimus dolorem illum maiores voluptatum, atque ab perspiciatis quam nemo quas doloribus eius expedita repudiandae culpa iure! Magnam, a! Dolor, placeat. Omnis ullam quia assumenda sequi! Facere eum repellendus neque sequi tempore odio sit corporis eveniet in at.</p>
    
        <h1 class="heading">Lorem ipsum dolicing elit. Voluptate, quos!</h1>
        <p>Fugiat ipsam explicabo vel molestiae quasi doloribus deserunt blanditiis enim? Dolor, maxime laboriosam. Cupiditate quam eius rem nesciunt nisi mollitia dignissimos quas itaque. Deleniti minus numquam ipsum dolore corrupti, porro laboriosam quasi quibusdam officiis provident non inventore facilis a magni voluptate, recusandae commodi! Impedit, sunt! Accusantium voluptate quidem laborum, tenetur voluptates dolore quasi atque earum fuga omnis cum architecto rerum dicta officiis? Nam ad repellendus excepturi dicta error, ea et pariatur aliquam ipsa, ab laborum, nesciunt tempora debitis itaque fuga. Dicta nobis accusamus itaque, natus exercitationem hic veniam? Quas, impedit in perferendis excepturi necessitatibus accusantium quae quasi maxime cupiditate aliquam doloribus illo, incidunt architecto aperiam voluptates quod non quos. Velit, ut voluptatem quidem voluptates est nihil iusto quis! Odio ipsam quibusdam molestias sit ipsa impedit atque saepe quaerat modi. Nemo excepturi dolorem expedita quis accusantium. Harum, quas. </p>
        <h1 class="heading">Lorem ipsum dolicing elit. Voluptate, quos!</h1>
        <p> Enim repellat eos labore aliquam consectetur cumque voluptatibus nam blanditiis magni quidem voluptatum laudantium officiis error pariatur aut quas itaque corrupti harum, provident libero minus vero at quo. Placeat expedita doloribus minus nulla, eveniet ex, minima nesciunt obcaecati nemo impedit cumque. Explicabo repellat quisquam ex possimus maxime perspiciatis dolorum. Iure vero quod fuga. Asperiores beatae tempora ea sint laborum hic laboriosam labore amet, dolorum, porro recusandae? Nisi voluptatibus vero blanditiis cumque neque laudantium cum esse optio officia nihil odio ipsa sit, nemo dolorum vitae sint dignissimos alias, repellat sed rem magni obcaecati? Sunt, tempore? Inventore maiores aliquid voluptates assumenda nam natus in laudantium possimus eligendi dolores. Voluptatem mollitia excepturi porro ab architecto quod. Debitis iure cumque voluptas quas a corporis magni amet sapiente minima soluta possimus at pariatur quia provident neque labore quis inventore dolorem alias voluptatibus, id laudantium dolor atque. Necessitatibus sit nam velit odio sed molestias odit earum magni ad? Omnis minus saepe nam commodi delectus dolorem error nulla quidem ratione iure exercitationem numquam, inventore alias reiciendis sunt odit mollitia. Dolorem alias, unde quidem blanditiis ullam iusto expedita quasi asperiores vero nam possimus molestias minima obcaecati aliquam at fuga cupiditate, facere eius in. Aliquid dignissimos velit cupiditate fuga, nostrum itaque provident voluptatem ad sequi facere exercitationem porro dolor omnis! Aut, atque doloremque mollitia itaque, ut suscipit illum impedit dolorem autem libero ad minus, sequi quaerat veniam rerum velit. Praesentium aperiam eum deleniti! Consequatur, odit rerum id pariatur, numquam corrupti tenetur saepe itaque ipsam odio consequuntur sapiente eaque dicta necessitatibus nobis doloremque aliquam quidem, placeat quas similique excepturi repellat. Impedit quibusdam dicta minus quam maiores, aspernatur animi ad reiciendis. Nemo, odit sunt, quis inventore, atque exercitationem aliquid voluptas facilis voluptatibus reprehenderit minima quod necessitatibus vitae culpa iste temporibus. In facilis sequi quod laborum omnis consectetur dolorum cumque dolor accusamus esse aperiam magni, quasi totam commodi hic voluptatibus id debitis dolorem maxime ex rerum fuga facere soluta. Inventore obcaecati id laborum praesentium nulla consectetur illo temporibus unde, eligendi porro aliquam excepturi nemo optio sequi placeat at, aperiam maxime, cum non </p>

       voluptatibus earum. Iste, repudiandae blanditiis debitis culpa beatae est delectus consequatur libero fuga iusto deserunt ducimus doloribus consectetur aliquam. Consequatur cumque veniam blanditiis dolor, voluptatem sequi illo odio nihil suscipit. Cumque dolore eligendi recusandae vel deserunt iste explicabo, dolores cupiditate maiores, ipsam nam obcaecati odit porro expedita dolor doloremque. Quos omnis autem, natus velit ex, consectetur architecto doloribus aperiam nemo, asperiores quis cum nam a possimus. Natus laborum, sint maiores tenetur mollitia, eos adipisci incidunt quo dolore suscipit necessitatibus 
 `, tags: ["react", "vue", "angular"],
 thumbnail: `https://images.pexels.com/photos/4675531/pexels-photo-4675531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`, background: "#fdca40"
}

const { title, descreption, thumbnail, background, selectedFile, author, content, tags } = obj;
const newPostMessage = new PostMessage({ title, descreption,thumbnail, background, author, content, tags, selectedFile })

try {
    await newPostMessage.save();

} catch (error) {
    console.log({ message: error.message });
}
}
createADemo();
