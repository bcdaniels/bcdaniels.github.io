//Welcome to my quote-of-the-day-maker.  Feel free to steal the code.  I stole bits and pieces myself.  --Bryan
var quote = new Array();
var author = new Array();
quote[0] = 'Furious activity is no substitute for understanding.';
author[0] = 'H.H. Williams';
quote[1] = "Le doute n'est pas un état bien agréable, mais l'assurance est un état ridicule.";
author[1] = 'Voltaire';
quote[2] = 'The more unintelligent a man is, the less mysterious existence seems to him.';
author[2] = 'Arthur Schopenhauer';
quote[3] = 'Imagining something may be the first step in making it happen, but it takes the real time and real efforts of real people to learn things, make things, turn thoughts into deeds or visions into inventions.';
author[3] = 'Mr. Rogers';
quote[4] = 'It has apparently been known for a long time that high objects are struck by lightning.  There is a quotation of Artabanis, the advisor to Xerxes, giving his master advice on a contemplated attack on the Greeks--during Xerxes\' campaign to bring the entire known world under the control of the Persians.  Artabanis said, "See how God with his lightning always smites the bigger animals and will not suffer them to wax insolent, while these of a lesser bulk chafe him not.  How likewise his bolts fall ever on the highest houses and tallest trees."  And then he explains the reason: "So, plainly, doth he love to bring down everything that exalts itself." <br> Do you think--now that you know a true account of lightning striking tall trees--that you have a greater wisdom in advising kings on military matters than did Artabanis 2300 years ago?  Do not exalt yourself.  You could only do it less poetically.';
author[4] = 'Richard Feynman';
quote[5] = 'My religion consists of a humble admiration of the illimitable superior spirit who reveals himself in the slight details we are able to perceive with our frail and feeble mind.';
author[5] = 'Albert Einstein';
quote[6] = 'The art of being happy lies in the power of extracting happiness from common things.';
author[6] = 'Henry Ward Beecher';
quote[7] = 'Science is as much for intellectual enjoyment as for practical utility.';
author[7] = 'Richard Feynman';
quote[8] = 'It should be possible to explain the laws of physics to a barmaid.';
author[8] = 'Albert Einstein';
quote[9] = 'I do not know what I may appear to the world; but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.';
author[9] = 'Isaac Newton';
quote[10] = "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.";
author[10] = 'Albert Einstein';
quote[11] = 'The effort to understand the universe is one of the very few things that lift human life above the level of farce and give it some of the grace of tragedy.';
author[11] = 'Steven Weinberg';
quote[12] = 'Science is nothing but trained and organized common sense, differing from the latter only as a veteran may differ from a raw recruit: and its methods differ from those of common sense only as far as the guardsman\'s cut and thrust differ from the manner in which a savage wields his club.';
author[12] = 'T. H. Huxley';
quote[13] = 'A common man marvels at uncommon things; a wise man marvels at the commonplace.';
author[13] = 'Confucius';
quote[14] = 'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.';
author[14] = 'Edsger Dijkstra';
quote[15] = 'God made the integers; all else is the work of Man.';
author[15] = 'Leopold Kronecker';
quote[16] = 'In those places in nature where we get an emotion, we find that there is generally a corresponding complexity and mystery about it.';
author[16] = 'Richard Feynman';
quote[17] = 'Although the laboratory bench is still the altar of science in the quest for new knowledge, the end of the twentieth century finds human knowledge in such a state of rich poverty that some small alcove in the temple may be reasonably set aside for Scholastic contemplation for the organization of knowledge into understanding.';
author[17] = 'Theodore B. Achacoso and William S. Yamamoto';
var qlen = quote.length;
var today = new Date();//today
var days = Math.floor(today.getTime()/1000/60/60/24);//days since Jan 1, 1970
var index = days%qlen;
//display the quotation
document.write(quote[index] + "\n");
document.write("<br>— " + author[index]);
