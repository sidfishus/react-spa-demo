
import * as React from "react";
import { IRoutedCompProps } from "../../routes";
import { Container, Segment, Label } from "semantic-ui-react";
import { HEADING_COLOUR } from "../../theme";
import { Link } from "react-router-dom";

interface IHomeProps extends IRoutedCompProps {
};

//sidtodo catalog of my favourite tunes.

//sidtodo: create a short video?

//topics:
//  purpose of site: catalog my work, demonstrate my skills, experience, give a flavour in to who i am
//      covers my work from approx 2017 onwards.
//  can see the power and future of software, everything is going to become an app
//  feel free to request a copy of my cv..
//  explain tech used to create the site, where the code can be found
//  about me
//  background
//  how i got in to coding
//  current and future projects: social media app using Material UI, cryptocurrency. like to do more on unit testing and writing functional code. brilliant concept
//  coding preferences, backend, full stack, prefer to use UI library
//  versatility, ability to learn on the fly
//  professional experience, cv furlough giving me time to finish
//  what the site offers: live React app e.t.c.
// educational game to explain programming to children



// links section

// work in spare time

//  financially viable but also rewarding and puts me to the test, has an impact on the world around me

//sidtodo page for my live mixes!

export const Home: React.SFC<IHomeProps> = (props) => {
    return (
        <>
            <Container>
                <Segment padded>
                    <Label color={HEADING_COLOUR} attached="top" content={"printf(\"Hello, World!\");"} />
                    {welcome}
                </Segment>
            </Container>
        </>
    );
};

//sidtodo <p>I am currently pursueing anything that is both financially viable (there are bills to pay unfortunately) but also rewarding and has an impact on the world around me</p>

//const welcome= <>test</>;

const welcome: JSX.Element = (
    <>
        <h1>Introduction</h1>
        <p>Hello and welcome to my cloud based portfolio!
            I trust your journey was not a stressful one.
        </p>
        <p>
            My name is Chris Siddall, I am currently the fine age of 35 years old (1985) and based in Tamworth Staffordshire.
            I have had a passion for coding since discovering it at the age of 16, and have created this application as a means of demonstrating my skills, to catalog my life's work and experience and to give further insight into my personality.
            It is not my intention to sound overly professional or formal because I want this to also be about expressing myself and my life story.
        </p>
        <p>
            Before the COVID quarantine in March 2019 my work on this was limited to the odd spare 15 minutes I could find.
            However being furloughed for 6 weeks gave me the wonderful opportunity to knuckle down and really put some time in.
            It was then that I completed the majority of the <Link to="./textparse">text parse user interface</Link>, and what remained was writing everything up.
        </p>
        <h1>About Me</h1>
        <p>I am a proud father to my 6 year old son and believe this has had a very positive effect on my outlook towards life.
            My father has moulded me in to the person I am today so I am hoping to replicate that with my son.
            Arthur if you are reading this, your father loves you very much.
        </p>
        <p>I have always been physically active and have done many sports in my youth including kickboxing, boxing, rugby, cricket, football and even gymnastics.
            Kickboxing is the sport I took most seriously which I did between the ages of 7 and 18, had 10 amateur fights including a British title bout (I lost) and even helped teach women and children's classes.
            I now rigorously exercise for over 1 hour almost every day because it has a wonderful effect on my physical and mental health and acts as a natural stimulant.
        </p>
        <p>
            I am naturally an introvert, content to be on my own but I appreciate the value of family and working with others.
            Depending on my mood and the surroundings I switch to an extrovert and crave interaction.
            Proud to be called a geek and I like to consider myself a deep outside of the box thinker, I love the extreme level of focus you can achieve when mapping out a scenario in your head.
            I enjoy solving problems which is the essence of programming, I need to be mentally stimulated otherwise I can become disinterested.
        </p>
        <p>
            If I had to sum myself up without embellishing too much I would say I'm a free thinker, confident, driven, motivated, versatile and quick to learn, meticulous to the point of appearing pedantic, and obsessive which is both positive and negative.
        </p>
        <p>
            Negatives and aspects I am working on are new surroundings and situations can make me anxious and I can be brutally honest.
            I find it difficult to summarise as this portfolio probably attests to.
            Programming has always felt natural to me, but I always have to conscious and reflect upon how I interact and converse with people.
            In my opinion computer code is far simpler to work with than humans, especially the opposite sex!
        </p>
        <p>In my opinion my biggest asset as a programmer is my lengthy and varied experience which I feel gives me the natural ability to be versatile and pick up and apply new concepts, languages and frameworks on the fly.
            With web development currently exploding for example, it is more important to be full-stack and versatile as opposed to being an expert in a single thing.
            Especially when every month there are a number of new libraries or updates to use and by the time you read this no doubt some of the third party code is now obsolete or deprecated.
            Unless you have a photographic memory it's not feasible to remember low level details of X number of programming languages, platforms, libraries.
        </p>
        <p>If I could change anything about myself it would be to remove my need for sleep.
            I have lots of ideas but there just isn't enough time in the day and I have to strike the correct balance.
        </p>

        <h1>Thoughts Towards Programming</h1>
        <h2>C++</h2>
        <p>
            For 15 years I was a C++ stalwart, being mentored and inspired by some very intelligent and experienced C++ coders whilst working for Prophet and this experience was invaluable.
            This taught me the importance of being meticulous, and writing careful and resilient code which is robust enough to run in a production environment.
            At the time we were very fixated on having as much of the code statically analysable as possible (like for example using MS SAL Annotations), to allow the compiler to pick up C++ style bugs and maximise efficiency.
            I understand the inner workings of C++ more so than any other language, there is not much you cannot achieve when you combine it's OO design and templates.
            However I believe the amount of flexibility you have comes at a cost in terms of readability, development time, loss of sight of the bigger picture, and potential for bugs.
            Plus there are less developers out there who actually competent in the language (pointers put a lot of people off!).
            The <a href="https://en.cppreference.com/w/cpp/utility/functional/placeholders">STL syntax</a> at times is very awkard, which in this case definitely results in the loss of readability for the sake of efficiency.
            And that is quite a simple example.
            Forgetting to deallocate memory in C/C++ is easy to do unless you write code in such a way, and can, and has, literally cost lives.
            I can't find a reference to it via search engines, but I was told a story where a key hospital system was offline due to a memory leak.
            I know of applications that have to be restarted multiple times per day due to long standing unfixed memory leaks!
            I would definitely recommend that new developers learn a language like C or C++ early on.            
            Higher level languages, and with the inventation of garbage collection can make you complacent or lazy and can take away your understanding of how a program actually executes.
        </p>

        <h2>.NET and C#</h2>
        <p> .NET and C# are brilliant - I love the concept of interim/byte code and JIT so that code is portable.
            generics not as good as C++ I understand due to .NET's type system making it not possible.
            for example in C++ there is a pattern known as the <a href="https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern">curiously recurring template pattern</a> (CRTP) where you can achieve static polymorphism which cuts out the run time costs associated with the dynamic variant i.e. requiring a virtual table (an extra 4/8 bytes per object) and having to dereference objects twice.
            You cannot do this kind of template trickery in .NET.
            However I believe achieving maximum efficiency should not by default be the first and foremost aim of software.
            Good design, readability and robustness should come first, and I believe you should only consider going to these lengths when absolutely necessary.
            Have always been impressed with the performance of .NET programs, I would be interested to see a comparison between a C++ program.
            I also love the all pervasive collection of freely available namespaces and assembles accessible through NuGet that greatly simplify and shorten development and take code reuse to new levels.
            Hopefully gone are the days of using Windows C functions such as '_beginThreadEx' and 'CreateWindowEx' that take X amount of parameters, or having to create things like "message pumps" *shudders*.
        </p>

        <h2>Javascript</h2>
        <p>
            Javascript is the language I have learned most recently, it is very refreshing to come from very strictly typed languages such as C++ and .NET and take advantage of it's very simple and forgiving syntax.
            The concept of transpilation is very much a bit of me!
            I was first introduced to this concept when I read a book by Bertrand Meyer on his Eiffel programming language that is transpiled to C.
            Reusing the already available and mature C compilers to produce optimised native executable code takes away a lot of the complexity of producing an executable and gives you the portabilty of C.
            Leveraging Babel allows you to use the latest features of Javascript on a wide range of browsers.
            There is probably a fundamental technical reason for why it's not possible, but why Javascript can't be compiled to binary using a predetermined byte order (i.e. little endian) to save on file size downloaded by clients but also remove the need for it to be translated before it can be executed.
            I've written a fair amount of Typescript code and it performs the job well but I'm not sure using types fits in with the essence of Javascript.
            I prefer to write pure Javascript, now having to use types everywhere makes the coder quicker to produce and feels less rigid.
            Using unit tests and pure functions may circumvent the need for Typescript.
            I was first introduced to functional programming in C++/STL with std::function and std::bind and used it to great effect in my PC/C++/Ogre game.
            I love the functional approach where everything is a function, coming from a OO background it requires you to think about applications very differently.
            At the moment I tend to mix OO and functional paradigms in programs, I think I'm yet to fully appreciate the power of functional code.
            Especially with the advent of React hooks which moved away from the use of classes//sidtodo.
            I think some applications suit OO well like my text parse library due to the large amount of statement types but would be interested to rewrite it using a functional approach.

            Why does the programmer need to delcare types at all when the compiler can infer their useage from the body of the code, and create a type file based on that information, for example with the 'auto' and 'var' keywords in C++/C# respectively. I would like to give this ago myself, and produce C# off the back of it. //sidtodo
        </p>

        <h2>Unit Testing</h2>
        <p>
            //sidtodo expand/rephrase
            This is something I have been taking advantage of for a while but always in an adhoc manner, <a href="https://github.com/sidfishus/BlockAllocator/blob/master/BlockAllocator_UnitTests.h">for example</a>.
            I would like to look at some of the unit testing platforms that are available.
            I would like to revisit some of my old code and enforce a strict functional and unit test approach.
            Or work for a company that enforces a similar rule, where unit tests and test driven development is an integral part of their development process.
        </p>

        <h2>Open Source</h2>
        <p>It is very inspiring to see the way the open source community is flourishing.
            For example I would never have imagined that Microsoft would begin releasing code like they have with their Roslyn compiler and their ASP .NET MVC Core libraries.
            The abundance of freely available code has allowed me to create this web site without having to reinvent the wheel and it feels like we are working together to share a better future.
            If you removed the content, I imagine that less than 10% (rough guess) of the codebase in this application is actually my own.
            I hope this trend continues!
        </p>

        <h1>Hobbies</h1>
        <p>Besides computer programming, I have been an obsessive carp fisherman since the age of 7 and lovingly fish in all weather conditions.</p>
        <p>
            In my early to mid 20's I was heavily into frequenting live music events such as raves, clubbing and festivals and my favourite genre's are trance, hard house/dance, drum and bass, and UK hardcore.
            I have been to Glastonbury 4 times.
            I learned to mix my favourite categories of music using CDJ's and played out approximately 10 times at small to medium club events.
        </p>
        <p>
            Those days are behind me now but I am still very passionate about music due to it's wonderful natural stimulating effects and will occasionally dust off the decks.
            Since becoming a father balancing my life has become even more important as I carefully manage work, family and my home as well as squeezing in time to follow my dreams.
            Lately I'm finding myself more and more interested in politics and have been following the COVID19 crisis and riots in America closely.
        </p>
        
        <h1>Childish Beginnings</h1>
        <h2>MSN Chat</h2>
        <p>I find it very random and lucky how I stumbled across programming and this is a story a geek/hacker may find interesting or relate to.
            But feel free to skip this section.
        </p>
        <p>When I was 16 my father bought me a PC and set me up to connect to dial up 56k internet to help with my A levels and it was whilst browsing the internet one day that I discovered the MSN chat room service.
            The <a href="https://en.wikipedia.org/wiki/MSN_Chat">MSN Chat service</a> was a collection of chat rooms (channels) accessible via a <a href="https://raw.githubusercontent.com/sidfishus/react-spa-demo/master/wwwroot/img/msn-webchat.png">browser</a> where you could chat with people from all over the world.
            You could also create your own channel which would make you the channel owner and this would give you the additional powers of being able to set the chat room subject, mute, kick and ban other members.
        </p>
        <p>
            I found out that it was possible to make other people the channel owner, when you create a channel a special password (owner key) is generated and placed in the Windows registry.
            With this knowledge I started to social engineer unsuspecting users into giving me the owner key to their channels, which I could then use to make myself owner by using the '/pass' command and take over ownership of their chat room by banning them.
            Ridiculous I know, but I was 16 at the time and I found this a lot of fun!
        </p>

        <p>
            One day I entered a busy chat room where everyone in the channel was an owner, and were all doing things like mass kicking people out but they were instantly rejoining, as well as mass stealing the other chatters' ownership.
            I remember having to continually refresh my browser to re-enter the channel after being repeatedly kicked and not really understanding what was happening.
            Whatever it was, I wanted those abilities as well.
        </p>
        <p>
            After venturing into other channels and speaking to various people I found out that they were using "bots" and "scripts" and my reaction was "what - like a script to a play?".
            After lots of chatting I found a user who was connected to the channel using a "bot" called "<a href="https://raw.githubusercontent.com/sidfishus/react-spa-demo/master/wwwroot/img/ircdominator.gif">IRC Dominator</a>", which would give you access to a lot more functionality than if you connected via a browser.
            Not being backwards in being forward I quickly gleaned the information on how I could download it and how to setup.
            I followed the instructions, which involved pasteing "<a href="https://raw.githubusercontent.com/sidfishus/react-spa-demo/master/wwwroot/img/ircdom-cookies.jpg">cookies</a>" into the application (which I got from doing a 'view source' in a browser session) and then fired it up.
            Now this would take my channel stealing to the next level!
        </p>
        <p>This was fun for a while but I started to hear more and more about what you could achieve with scripts and be told things that were going over my head at the time.
            After lots of begging I managed to talk someone in to sending me a working "script".
            This consisted of an application called <a href="https://www.mirc.co.uk/">mIRC</a> and various other files.
            I executed the mIRC.exe and was told type "join %#&lt;name of channel&gt;"" into a command prompt type window.
            What followed then was a bunch of jargon scrolling down the screen until another window popped up that was a representation of the channel but through mIRC - I was in!
        </p>
        <p>
            I still didn't understand why this was called a "script" but I started to get to grips with my new found abilities.
            You could type various commands in to the channel window preceded by a /.
            After doing some investigation in to this mIRC I found that it had a built in text editor like notepad and the ability to view files that were loaded in to the application.
            One of the commands (/scroller) I was using gave you the ability the scroll messages on the screen with an increasing number of asterixes.
            Whilst reading the computer code in the text files I came across the line "alias scroller &123;" - the cogs in my brain ticked over - I had found the mechanism that dictates what the scroller command does!
            I copied and pasted this code but changed the top line to "alias scroller2 &123;", and changed the asterixes to another character.
            I then hit the /scroller2 command and it worked as expected! My first script.
            Apparently the text files were the "scripts" everyone was referring to and "scripting" was the process of writing script code.
        </p>

        <p>
            After progressing my scripting abilities and furthering my understanding of the relationship between mIRC and MSN Chat I went one step further and decided to attempt writing a "connection" script.
            mIRC has inbuilt functionality to connect to IRC servers (the Internet Relay Chat protocol MSN chat was based on) but MSN used it's own authentication processes which had to be manually scripted in order to gain access to the network.
            I.e. the connection between mIRC and MSN had to be manually scripted using the mIRC 'socket' feature (which I imagine was implemented using Winsock).
            To gain an understanding of how to do this I edited the connection script I was using at the time (named QuickChat), began stepping it through methodically and using the mIRC 'echo' command to give me an insight in to the data exchanges.
            There were 2 connections involved, a connection to a "directory" server, and a connection to the actual chat server.
            Sending a "finds" command whilst connected to the directory server would tell you which server a particular chat room was on as there were 8 of them.
        </p>

        <p>
            Authentication was the most complex aspect and consisted of 2 parts.
            The first part was an 8 character challenge string and in order to gain the answer you had to create a hidden browser window within mIRC and embed the chat ActiveX control within it.
            The second part involved sending the MSN passport cookies which had to be regenerated every 24 hours that I was already in the habit of doing.
        </p>

        <p>
            With this understanding I wrote my own connection in which I named "r00t" and released to the public via a popular mIRC scripting site at the time.
            I couldn't resist the temptation to add a hidden backdoor which meant I would automatically be given owner access whenever I joined a channel with an owner user using my script ;-).
        </p>

        <p>
            ROOt connection was quite well received but it didn't stand out at the time, there was nothing special about it.
            Scripters were fixated with speed, if you were faster than everyone else at anything then you were considered "elite".
            For example we used to write "deowner" protection so that we could react as quickly as possible to having our channel ownership removed to prevent channel take overs.
            For some reason we were under the illusion that the more complicated we could make this the quicker we would react and would go to great lengths!
            Joining a channel would incur a lag of at least 1 second due to having to determine which server a channel was on and then connect a socket to that server.
            I had the idea of using pre-connected sockets: upon opening mIRC, the connection script would create a socket to each of the 8 servers and leave them idle.
            Joining a channel was then a case of sending a "JOIN %#&lt;Channel&gt;" to each of the pre-connected sockets simulataneously, and the relevant one would give you access.
            Voila instant connection!
            I released this connection as "Direx" and it was very popular.
            Again I couldn't help but add a backdoor which I used on a number of occasions to <a href="https://xt.proboards.com/thread/1017/connected-first?page=3">recapture</a> stolen channels.
            There was an MSN Chat command "who" that you could use to search for chatters.
            When my connection authenticated it sent a certain signature which could then be looked up using the "who" command.
            In one hour I used this to mass find everyone connected using my script and promptly used the backdoor (ownership on entry) to take 50+ channels for fun (I returned the majority of them).
        </p>

        <h3>Split Bots..</h3>
        <p>
            Occasionally the chat servers would be rebooted for maintenance and when the server a given channel was on was rebooted ("split"), it gave you the opportunity to recreate it.
            There were a number of very popular chat rooms at the time (%#Somewhere, %#Hackers, %#Unknown) that different cliques/factions of users were always trying to own.
            The original MSN chat hackers had devised programs that would take advantage of whenever this happened by connecting 100's of sockets to the directory server and repeatedly sending the command to create a channel.
            If you were lucky enough to send the command at the exact right time you would be rewarded with the recreation of the channel and become the new owner.
        </p>

        <h3>Visual Basic</h3>
        <p>
            By now I was well into my programming and looking to expand my skills.
            Visual Basic was a popular language among MSN Chat scripters so I decided to give it a go.
            Around this time I had a lot of holiday away from sixth form, and my dad would regularly drop me off fishing/camping for a week at a time.
            And so I bought an official book on VB and read it on my next fishing trip.
            This was the first time I had been introduced to data types and the Windows API.
            After I had returned from my trip I downloaded the Microsoft compiler/development environment and created some programs.
            This was easy enough but I didn't have the enthusiasm to write my own chat client in Visual Basic.
        </p>

        <h3>Reverse Engineering the Chat ActiveX Control</h3>
        <p>
            The thing that was the biggest hindrance to connecting to the chat service was the use of the ActiveX control, having to create a browser window with the OCX embedded per channel connection was slow and resource heavy and limited the amount of connections we could make at any one time.
            For the various types of bots we were using you could have up to 1000 sockets simultaneously connected to the chat network.
        </p>
        <p>
            Around this time one of my online friends gave me the source code to a Visual Basic program that could connect to MSN chat without having to use the MSN Chat OCX, however it only worked approximately 80% of the time.
            This was the absolute holy grail and was to my knowledge unheard of at the time!
            Apparently he had received it from a well known hacker at the time (AL..) who had reverse engineered the OCX and reproduced the challenge algorithm in VB, but was struggling to make it 100% successful.
        </p>
        <p>
            From memory the algorithm consisted of unpacking the challenge you receive from MSN from a string to an array of 8 bytes, appending it to a fixed string and running it through a MD5 checksum.
            The result of the checksum was then added to another fixed string and then MD5'd again.
            I noticed that only when the challenge contained "\0" would authentication fail.
            After digging in to the code I found it was treating the challenge as a C style string as opposed to an array of bytes and thus stripping out the part of the challenge after the \0 - \0 has a special meaning in strings (null terminator) and is used to mark the end of a string.
            Fixing this part of the code worked as I expected and now it would authenticate 100% of the time.
        </p>

        <p>
            I then reproduced the same algorithm in mIRC so we could use it in our connection scripts and circumvent any need for the OCX.
            Yes!! Me and my friends now had a definitive advantage over the competition!
        </p>

        <h3>C++</h3>
        <p>
            On MSN Chat, if you could write C or C++ code then you were "the man" and it gave you the bragging rights over lesser coders.
        </p>
        <p>
            By now I had learned that mIRC was relatively slow, and the more script loaded in to mIRC the slower it became.
            Also, the complex authentication challenge algorithm we were using was currently written in mIRC and could speed up connection time if moved outside of mIRC.
            Ideally I wanted to move as much of the mIRC code as possible to another programming language that was compiled but retain the mIRC client as a user interface.
        </p>
        <p>
            mIRC has the ability to call functionality from a DLL so I followed a tutorial on how to create a C++ mIRC DLL and did a proof of concept.
            Still having a lot of free time at my disposal, I bought a <a href="https://www.amazon.co.uk/Wileys-Teach-Yourself-Stevens-2003-04-04/dp/B01A65I12C">book on C++</a> and read it whilst fishing.
            This gave me enough of an understanding to recreate the challenge algorithm in a C++ DLL that could be called at will by mIRC.
        </p>

        <p>
            I then tried to move all of the mIRC connection script event handling code in to C++ and I utilised it by passing the MSN chat data received from the mIRC socket to a function in the DLL, and executing the result which was a list of mIRC commands.
            In retrospect now it would have been better to write a C++ program that I could send commands to from inside mIRC that did all of the socket connections including authentication, and so that mIRC only delt with the user interface.
        </p>

        <p>
            I also created a split bot as an executable written entirely in C++ which was another advantage because the majority of everyone else were using ones made in mIRC.
             //sidtodo find screenshot
        </p>
        
        <h3>The End</h3>
        <p>
            This is as far as I got on MSN because the network was closed in <a href="https://www.itprotoday.com/windows-8/conversation-over-msn-closing-chat-rooms-worldwide">2003</a> :(.
            It's hard to explain why I was so fascinated with MSN Chat at the time, I really had a great time and I wasn't alone as it was very popular amongst computer programmers at the time.
            Perhaps one day I'll have a go at recreating MSN Chat, not just another IRC network, but one that has that MSN Chat feel.
        </p>
        
        <p>This probably all sounds irrelevant, but I can't emphasise enough the advantage this experience gave me when I went to university and first started working.
            I already had 5 years solid experience behind me and is how I developed my analytical, problem solving and investigative mindset.
        </p>

        <p>I really could write a book about my experiences and exploits (maybe one day I will) and have very fond memories, long live MSN Chat.</p>


        //sidtodo
        <p>If you want to introduce children to programming then give them real world scenarios they are interested in to create programs for</p>


        <h1>Current and Future</h1>
        <p>I do believe there is such a thing as too much technology and think it's de-sensitising us to the world around us</p>
    </>
);