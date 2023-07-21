---
author: Arnon Ram
title: My latest automation testing strategy presumption (part 1)
subtitle: "First part: the gist, unit tests, and API tests"
date: "11-9-2022"
image: "/images/posts/presumption_1.webp"
---

> **The other part:**
>
> [Part 2](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-2-6616ccfd240e) (contract and integration tests)
>
> [Part 3](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-3-a72539c65841) (client side tests, conclusions)

Over the (many) years of working first as a manual QA Engineer, and later as an Automation QA Engineer, I’ve had many presumptions about what a good automation testing strategy for a project should be:

> _Only integration tests…_ wait no, let’s also u*nit test everything!… Testing pyramid* yeah, that’s the ticket… hmm… What about c*omponent testing?* Then we can reduce integration testing… wait but then what about all the contact points with other services… those must have integration tests, right? Right?!?… ahh, maybe _contract testing_ could help us there…

Not to mention client side, performance, and other types of testing.

So to try to get my head straight on this, and maybe help those struggling or just looking for ideas, I’ll try to articulate what I believe is a good automation testing strategy for our ever-evolving, ever more complicated world of software testing.

# The General Idea

Many of you will be familiar with the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html#TheTestPyramid), which gives you a good idea of what testing “should’’ look like. It might not be all that clear at first, and it may be a bit too simplistic, but the gist is simple:

- Have tests of various granularity
- Have many cheap/quick tests
- Have fewer expensive/long tests

At some point in my career, I was a strict adherent of the pyramid. But as I gained experience, and from being exposed to different projects and mentoring, my views changed. To paraphrase Captain Barbossa: _“The_ **_testing pyramid_** _is more what you’d call ‘guidelines’ than actual rules.”_

So without further ado, here are the kinds of testing that I find should be part of your automation quality arsenal. I’ll discuss them a bit further in this article. The order here is not by importance, amount, or scale; this isn’t a pyramid, a cone, or an hourglass. It’s just a set of different tests that I have no idea how to draw into a nice diagram, but together they form a strong basis of quality for your project.

The tests are:

- Unit
- API / Component
- Contract
- Integration
- Client side

Some of you might call several of these by different names, System test, Service Tests, E2E, etc. his is what I call them. When I’ve discussed each one, you’ll probably recognize what I’m talking about and shift my terminology to yours.

# Unit Tests

There’s tons of material already written about unit tests. So I won’t bother you too much here.

Unit tests are the most basic of tests. The unit test is there to test a method (or function), nothing more, nothing less. This allows you to be sure of your application’s building blocks. Everything outside the function that you test should be mocked.

But which function do you test? Everything? And if not, then what?

I’ve struggled with this question for a while. At first, I thought that all functions should be tested thoroughly, and while this will lead to testing suites that cover your code to almost 100%, they’ll become constricting and unmaintainable. Every refactor will break tests; every little change will require more test changes.

So now, when discussing what to unit test, I usually go with these two guidelines:

1.  Only test public functions
2.  Only test if there’s logic in the function
    - This can be anything from complex calculations, to if-else statements, to try-catch, to data manipulation, etc.
    - A function that just writes to your DB, for example, isn’t worthy of a unit test. If that function also modifies the data before sending, then that’s another problem, and you should discuss [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) with whoever wrote it.

With unit tests, you can be very creative in your tests, passing parameters that might occur only in edge cases. In this way, you can see that your method behaves as you expect it to when what it expects happens, _but also when what it doesn’t expect happens_.

This last part is important. You don’t only testthe happy flow. You **must** also test the bad flow, the failures, even if those failures don’t seem possible (_nah, this param will never come as null_…I’m sure you’ve heard these statements before).

> **_Negative testing_** _is an important and integral part of any testing strategy, and should never be ignored. This is true not only for unit testing but for all parts of the testing strategy._

**_Unit tests_** should be written alongside the actual code they’re testing and merged into your main branch together. In fact, I’d insist on it. It doesn’t need to be [TDD](https://en.wikipedia.org/wiki/Test-driven_development), just as long as the tests are there. Remember the rule of thumb as to what should be tested, and don’t let anyone skimp on this (not even yourself). Many times, writing the tests would cause you to change the code to make it more testable, and in general, I found that testable code is more concise, generic, and clean.

# API/Component Tests

A personal favorite of mine.

I loop these two together, but some might want to categorize them separately.

The idea here is to test your application/service in an isolated manner. So instead of testing a single method, you test a string of them. Basically, you’re testing a flow inside the service. Anything outside your service (or app) is mocked, such as third-party calls or other company services. A debatable area to mock are things like DBs and message/queue services. This might (as always) change from project to project (see _to mock or not sidebar_).

An API test, as the name suggests, is instantiated when an endpoint in your app is hit with a request (for example: create) and ends with the given response. Of course, you should also verify that the data was created successfully. This could be done with mocks (by identifying that a call to the function was placed with specific data) or perhaps by performing an immediate GET on the written data. API tests could also be tested with mocks _inside_ your service, to allow you to test more scenarios and permutations of your flow.

By the way, if you use [OpenAPI](https://www.openapis.org/) to generate your API docs, then performing validation on the payload during the API tests is highly recommended.

Component tests are similar but don’t start through an API endpoint. Maybe your service uses a messaging service that it listens to, so with a component test you can test what happens when the listening function receives a message, and then test the flow following it. Or maybe you want to test several functions together when some are private (and so you can’t unit test them) while others are public.

**_API and Component_** **_tests_** should be written alongside unit tests since, again, they test flows, and your app is a series of functions strung together to make flows.

## To mock or not to mock…

> For example, if your project uses MongoDB and you’re using the supplied drivers (or a well-known library for communicating with MongoDB) do you really need to test that the data you sent was written to MongoDB? You could just as easily spy on the MongoDB driver and verify what was sent.
>
> On the other hand, maybe your data is manipulated on the DB by a stored procedure (or equivalent) and maybe that procedure creates other entries in the DB, etc. In this case, verifying that the data was written correctly might be important. Another example, you want to test a flow that retrieves data from the DB, but to do that you first need data in the DB…

## Up next…

In part two of this article, I’ll give you my thoughts on Contract and Integration tests. In part three I’ll discuss client-side testing and leave you with some final thoughts.

_Thanks for reading and hope you learned something new._
