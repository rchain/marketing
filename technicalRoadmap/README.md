# Development and Technical Roadmap

RChain coop has strives for an efficient and user-friendly onboarding experience for developers who intend to build on the RChain platform. The Marketing team's developer education pillar, led by Joshy Orndorff,  is responsible for creating that developer experience according to this roadmap. Because developers cannot be educated on the tools and ecosystem that they will be using until such tools and ecosystem exist, this roadmap includes both educational resources as well as necessary ecosystem elements.

## RSign / Metamask
Ethereum Dapps became much more successful when the metamask chrome extension allowed the already popular web browser to communicate with the ethereum blockchain. Inblock.io has a personal connection with the creator of metamask, and we strive to get RChain support integrated into the already existing tool. Integration is hard to predict and will depend on largely on inblock.io's ability to capilalize on their lead. Perhaps new year is a good goal.

As both an alternative and a backup plan, we have begun development of RSign, a browser extension that provides the transaction signing feature (but not the direct blockchain communication feature) of metamask. This extension is already in basic working order, and can be hardened by new year. A security audit will be critical.

## RChain-API
RNode speaks gRPC natively. gRPC supports many languages, but learning it is an extra hurdle in a dapp developer's educational journey. RChain-API is a node.js library which allows javascript developers to communicate with an RNode in a familiar way, and hides the intricacies of gRPC from the dapp developer. This project is already in basic working order, but has outstanding feature requests and needs regular maintenance as RNode itself evolves. It is being maintained by Joshy Orndorff, Chris Williams, and Dan Connolly. Help from inblock.io is welcome.

## E-Learning Course
An online learning experience to be offered on something like coursera, udemy, etc and skinned to match the rchain.coop theme. This course will cover many aspects of rchain including rholang, rho calculus, casper, object capabilities, dapp development, and later, LADL. The primary course content will be delivered by the end of January 2019. Microcertifications will go on RChain by summer 2019. This work is being completed by Brent Fischer, Joshy Orndorff, Jake Gillberg, and Jack Mills.

## Example Dapps
Dapp developers who are learning the platform need good examples to study and mimic. Greg M proposes RSong for this purpose and indeed RSong will be a good resource. However, it is a very complex dapp that beginners will find unapproachable. We will deliver _at least_ four example dapps of varying skill levels. These Dapps are being produced by Joshy Orndorff,  Chris Williams, and Bounty system participants in both Javascript and Python.

Skill Level | Dapp Name | State | Delivery Date
--- | --- | --- | ---
novice | nth Caller | complete (needs update for node 0.7) | basically done
beginner | Status | nearly complete | October 31 2018
intermediate | Rock paper scissors | planned | November 30th 2018
advanced | Coin Faucet | POC complete | January 31 2018

## Architecture Doc Revision
The architecture doc has served as a valuable resourse for beginning and experienced developers on the platform, but it has become outdated as scope and project design has changed. It needs to be updated to one again serve as a respectable resource. The revision will be performed primarily by Joshy Orndorff and Dan Connolly with help welcome from other qualified community members. Final approval will be given by Mike Stay.

## Casper Game
Casper proof of stake is an important part of RChain's architecture, but not many people understand it. We strive to make a browser-based educational game in which human learners manually play the casper game which is typically played by software like RNode. This is being developed by Joshy Orndorff, Isaac Defrain, and a web developer TBD. Advice will be given by Vlad Zamfir.

## librho
A standard library of useful rholang contracts. This project will probably be in continual development and never really done.

## Wallets
Although they've been called "naval gazing" wallets are critical to developer adoption of the network. We aim to build a browser-based wallet UI that works with REV and other REV-like tokens. Development is a collaboration between coop marketing and inblock.io

## Rholang Language Reference
There is a good rholang tutorial, and will eventually be a formal syntax and semantics of rholang, but there is no complete language reference guide. This document would serve as a resource that a rholang programmer can reference with any question about how rholang works. It is being written by Joshy Orndorff and Derek Sorensen of pyrofex under the supervision of Kelly Foster. Delivery date is New Years.

## Meetups Hackathons Presentations
Such events do a lot in terms of developer recruitment and education. We're working on a set of guidelines to run effective events including a master slide deck from with organizers can freely pull material. This work is a collaboration between Joshy Orndorff on the DevEd front and Patrick Maguire on the community building front.

## gRPC endpointHardening
If an RNode exposes its gRPC interface publicly, it is subject to DOS attacks. This will be a thin wrapper around the gRPC interface that will enforce some basic proof of work. No developers assigned yet, but this is a small task that will be complete in roughly ten dev hours.
