---
title: My latest automation testing strategy presumption (part 3)
subtitle: "The last part: client side testing, and conclusions"
date: "19-10-2022"
image: "/images/posts/presumption_3.webp"
---

Last part of _My latest automation testing strategy presumption_ series. If you haven’t read them, you can find the links here.

> **The other part:**
>
> [Part 1](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-1-12c3886ea0ee) (introduction, Unit tests, Component/API tests)
>
> [Part 2](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-2-6616ccfd240e) (contract and integration tests)

Now, for the stunning conclusion…

# Client-side tests

As the name suggests, these are tests that are performed on the client. In many cases, this will be a browser, and it’s what I’m familiar with (I’ve never had a chance to work on a non-web client). From my experience, this is the kind of testing that people think of when they hear the pair of words “test automation” and as you already know, it isn’t. It’s just one more kind of test.

I started messing around with client-side only recently (I knew about it, and messed with it a bit, but it was never my focus). My perception of client-side moved from something that’s there only to test the whole application end-to-end, and is therefore slow, cumbersome, and very flaky to something that tests the GUI only, while mocking the server side, and is faster and more stable.

What do I mean when I mock the server side? It means that any time the client makes an API request to the server (any server) to get data, we intercept that call and stub a response. This allows us fine control over the data the client receives. Just as in API/component tests, you can simulate more permutations of the data, along with better negative tests. But stubbing and returning mocked data isn’t the only thing here. Since we can spy on the API calls, we can verify that the client is sending the correct data back to the server.

“But Arnon”, you say, “if you mock all the server-side stuff, what if someone in the backend breaks the UI by not sending the correct data?” To that I say, “Ahh _grasshopper_, you may add contract tests between your server and client… what are they if not two micro-services talking to each other?”

This isn’t to say that you shouldn’t have complete, user-style, end-to-end tests. The kind of tests that really mimic the behavior and journey of a user while on your app. But just like the integration tests mentioned above, these should be as few as possible (keeping in mind the same **_“again I want to stress”_** section from [part 2](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-2-6616ccfd240e)).

For obvious reasons, client-side tests can only be written after development is done. But as with any other tests, writing them immediately is better than writing them later.

> **_Client-side tangent…_**
>
> _I’d also like to go on a small tangent here and say that your client-side should be as thoroughly tested as your server side. This doesn’t mean only GUI tests as I mentioned earlier, but Unit Tests for any logic performed on the client, and UI component tests as well (see_ [_React_](https://reactjs.org/docs/testing.html)_,_ [_Angular_](https://angular.io/guide/testing-components-scenarios)_, etc.) Maybe it’s just my experience, but this isn’t something that I’ve seen a lot._
>
> _In case you were wondering, network interception and handling are supported natively by both_ [_Cypress_](https://docs.cypress.io/api/commands/intercept) _and_ [_Playwright_](https://playwright.dev/docs/network)_. Although Selenium_ [_doesn’t support_](https://www.selenium.dev/documentation/webdriver/bidirectional/) _this yet, you can search around for similar functionality using plugging or third-party libraries. And I’ll also mention that both Playwright and Cypress offer tools for component testing (_[_here_](https://playwright.dev/docs/test-components) _and_ [_here_](https://docs.cypress.io/guides/component-testing/testing-react)_, respectively)._

# That’s a lot of work

Yes, it is.

In an ideal world, no code will be merged without all relevant tests written for it, but sadly, we aren’t there yet (although we should strive for it).

Constraints, such as customer demands, management demands, and team changes will interfere with our plans and we’ll need to decide which risk we’re willing to take, maybe some tests we could write later, maybe…

At the very least, I like to have Unit and API/component tests. With these two in place, I know that my service, alone, in isolation, works as it’s supposed to work. But most services aren’t islands, so adding a **_contract test_** or two is great if your new feature receives data from the outside, or sends data out. Again, it should be relatively simple once you’ve got the infrastructure and have trained your team to write them.

I’m not dismissing Integration or Client side tests here, they’re super important, but those three above would give me much confidence. If I was pressed, I’d do them first, and add the rest as soon as possible.

# So how do you do it?

As is the case in many other endeavors, good foundations are the most important parts. For me, the foundation for good test automation comprises, at the very least, of two parts:

- **The Technology** — Choosing the right framework and stack for you and your team, writing the initial code and some good examples. Making the code readable, organized, and easy to understand allows anyone to jump in later and add more tests. The advantages of a good pipeline, where tests are continuously running and are giving immediate feedback can’t be stressed enough (yeah, I think another article is needed here…)
- **The People** — Quality isn’t only the domain of QA (that’s a whole lot of discussion for another place). Having everyone on the team understand the importance of testing and the benefits of having good automation is key. The extra day or two (or three) of writing good tests for the new feature will be worth it down the road, and as soon as the team understands it, and takes it into account in their estimation, the better.
- Okay, three parts: **The Process** — A good process of what’s expected, not just of writing the tests, but deciding which tests to write (is this Unit or API or both? Do I need an integration test here?), writing a test plan (even a short one with both developer and QA sitting together and hashing it out), code review (yes, for tests as well!)…

Of course, once the process is well defined, and the infrastructure for all these different kinds of tests are in place, then adding a test for a new feature/API/whatever, is a relatively peaceful walk in the park. That’s not to say that it’s easy and done quickly. In fact, many times testing will take just as long as developing, and not only because issues will be found during testing that will need to be fixed, but because writing good tests take time.

# Conclusions

Testing is hard.

Apart from thinking about all the situations that might arise out in the wild, you need to write code that tests code. And while many people will say: “yeah, but it’s testing code, we can leave it like this”, I will say that writing good automation tests and infrastructure is no different than writing production-grade code. So maybe memory management and optimization isn’t the foremost thought needed to have while writing tests, but the code you write should be every bit as readable, clean, reusable, generic, and concise as possible.

As I said at the start of this article, this is my current working automation testing strategy, and I believe it’s pretty good. But I’m quite sure that just as in the past, my thoughts on how best to test and to automate tests will change as I learn more, meet and talk to people, work on new products, and as technology evolves.

So keep an open mind, keep learning, and may your tests always be green.
