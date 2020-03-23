import React from 'react'
import './Home.css'

function Home(props) {
    return (
        <section className='homeSection'>
            <header className='homeHeader'>
                <h1>Awesome page about how awesome cats are</h1>
            </header>
            <article className='reasonArt'>
                <header>
                    <h2>10 Reasons Why Cats Are Awesome</h2>
                </header>
                <ol className='homeOl'>
                    <li>
                        Cats can be left by themselves for a while. You can take a short vacation and leave them at home. All they need is enough food and water to make it through. They don’t get separation anxiety and tear up your entire house like dogs do.
                    </li>
                    <li>
                        Yeah, litter boxes can be gross, but they are much easier to deal with than poop scattered all over the house. Cats can even be taught to be potty trained on a real toilet. How cool is that?
                    </li>
                    <li>
                        Cats don’t need to be taken on walks or let outside. All they need is to eat, sleep, and hang out. A lot of people don’t have time to be taking their pets on walks every day.
                    </li>
                    <li>
                        The majority of cats are good with kids, and let kids carry them around. A few cats don't do well with kids, but you never have to worry about the kids getting injured or killed by a cat-like you do with dogs.
                    </li>
                    <li>
                        Cats are pretty quiet compared to dogs. Do you ever get annoyed when a dog’s barking wakes the whole house? You don’t have this problem with cats. Cats that are vocal never meow loud enough to cause a scene, and when you have visitors they go off and hide rather than jump all over them.
                    </li>
                    <li>
                        Cats bathe themselves and very rarely need a bath. They don’t smell bad either like dogs do. You’ll see: after you pet a cat, you don’t feel like you need to wash your hands like crazy.
                    </li>
                    <li>
                        Cats can stay inside their whole lives, and never get dirty and bring fleas and ticks into your home. You don’t have to worry about your pet getting attacked by a wild animal when they live inside.
                    </li>
                    <li>
                        Cats are natural-born predators. Insects, bees, and spiders don’t have a chance with a cat. Cats pretty much exterminate pests from your house. You won't have a rat problem with a cat in your house. Hunting is a game for them.
                    </li>
                    <li>
                        Cats are funny. Everyone has seen those millions of videos on YouTube featuring cats' hilarious behaviors. They are bigger celebrities than half of the people on the Internet.
                    </li>
                    <li>
                        Cats have a clairvoyance about them. They can feel when you are upset and they want to comfort you. Some cats know when someone is about to die. They are very emotional animals that love to be held and cuddled with.
                    </li>
                </ol>
            </article>
        </section>
    )
}

export default Home