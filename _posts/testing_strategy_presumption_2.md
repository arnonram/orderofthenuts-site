---
title: My latest automation testing strategy presumption (part 2)
subtitle: "The second part: contract tests and integration tests"
date: "22-9-2022"
image: "/images/posts/presumption_2.webp"
---

Welcome to part two of _My latest automation testing strategy presumption_.

In the previous part, I introduced, well… _My latest automation testing strategy presumption_ and discussed the general idea, enumerated the kinds of tests I’ll be talking about, and discussed two of them (Unit, and API/Component). You should read it, it’s very cool and informative… I’m not biased at all.

> **The other part:**
>
> [Part 1](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-1-12c3886ea0ee) (introduction, Unit tests, Component/API tests)
>
> [Part 3](https://engineering.bigid.com/my-latests-automation-testing-strategy-presumption-part-3-a72539c65841) (client side tests, conclusions)

So now, let’s continue…

# Contract tests

I believe that Contract tests will be the least known among the list of tests I mentioned in this article, and that’s a shame.

In my opinion, Contract tests are needed whenever a company has a micro-service architecture (or even just several services communicating with each other). The idea is simple: you test the contract between two services.

Say _service A_ expects to receive a JSON body (for example) with specific fields when it calls an API on _service B_. Or perhaps it consumes a message from a queue that was published by _service B_. If _service B_ changes the response it sends or the message it publishes, it might break _service A_.

Sounds familiar?

This is where Contract Tests, or more specifically **_consumer-side contract tests_** come into play. The consumer writes a test specifying what it expects to receive; the provider runs these tests against its own API to verify that it really returns what the consumer expects. This way, if someone on the provider service team changes the response being sent back to the consumer, then the test will break.

What happens next is for the teams to decide. Is the change really necessary? If yes, then we need to update the consumers on this change. Maybe we don’t really need to change the response, and so avoid the hassle of updating all of our consumers.

Ideally, these tests are similar to API/Component tests, so you don’t need to start up your whole app infrastructure of many services to test. The developers should be able to run these tests locally (right with the unit and API tests) and get immediate feedback if they broke something.

I’ve had success with [**Pact.io**](https://docs.pact.io/) in this regard and highly recommend even just going over their docs. Other solutions might be a better fit for your organization and projects, but I’m less familiar with them.

> **_Maybe you don’t need it…_**
>
> _Of course, maybe you don’t need Contract testing. If all your services communicate over Kafka, then_ [_Kafka Schema Registry_](https://www.pluralsight.com/courses/enforcing-data-contracts-kafka-schema-registry) _might be enough. Maybe your services communicate over_ [_gRPC_](https://grpc.io/)_, then_ [_Protobuf_](https://developers.google.com/protocol-buffers) _has you covered._

# Integration Tests

Integration tests are usually longer to run (for obvious reasons) and are flakier. They’re flaky because they depend on a lot of moving parts: maybe _service X_ broke a contract, or _service Y_ crashed, or the DB wasn’t reached, or RabbitMQ is congested, or some other reason…

And so we constantly run, re-run, and re-re-run our Integration tests, crossing our fingers and hoping that all works as it should. In some cases, people are so used to _noisy_ Integration tests that they just ignore the failing tests or start skipping them. That way lies madness… and bad quality that will be hard to come back from.

Ideally, Integration tests don’t mock anything. They run on your whole application. Everything is up: all services, all DBs, all queues, etc. (I know some call them System Tests, but Integration is how I came by them, so it stuck). Integration tests don’t run through the UI (that’s the next section), rather they run only through API calls.

Before I learned about Contract tests, I made sure to run as many tests as possible that verify these contact points, with as many permutations as can be done with Integration tests (since we’re working with APIs, there’s a hard limit on how much you can _abuse_ your system).

But once I had Contract tests to verify these contact points between services, and I had good coverage and confidence in the Unit, API, and Component tests that were written, I could reduce the number of Integration tests to the bare minimum. In some cases, having only a handful of Integration tests for a certain service is preferable (of course, some services might integrate with many services and could need more than a handful). I suggest taking a close look at all the tests mentioned above and distill only those Integration tests down to the ones you really need to write.

Now, I know I said no mocking, **but** there might be times when you’ll want to mock something in your Integration tests. Say, there’s a service that runs for a long time before responding (lots of processing, etc.) In that case, yes, mocking should be done. But make sure that you test and validate the contract thoroughly.

It’s possible to write Integration tests before or during development, but as we know, stuff under development is fluid, and new factors come into play, or new understandings are reached before the process is complete. Writing during development means a possible fluid test that might need to be amended over the course of its writing. And as always, merging the tests with the code would be ideal.

**_And again I want to stress_** that this distilling of Integration tests should be done only if you trust your tests and your code coverage completely. If you’re missing tests and aren’t covering all your bases, then having only a handful of tests could be very bad.

The next article will be the last in this series, and will discuss Client-side testing, and give you some final thoughts and conclusions.

Stay tuned and thanks for reading.
