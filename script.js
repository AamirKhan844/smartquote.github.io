const quoteContainer=document.getElementById('quote-container');
const quote=document.getElementById('quote');
const Author=document.getElementById('author');
const twitterButton=document.getElementById('twitter-button');
const newQuote=document.getElementById('new-quote');
const facebook=document.getElementById('facebook');


let apiQuotes=[];
function newQUOTE()
{
    const Quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if(Quote.Author==null)
    {
        Author.textContent="Anonymous";
    }
    Author.textContent="~  " + Quote.author ;
    quote.textContent=Quote.text;
}

async function getQuotes()
{
    const apiURL='https://type.fit/api/quotes';
    try
    {
        const response= await fetch (apiURL);
        apiQuotes=await response.json();
        console.log(apiQuotes);
        newQUOTE();
    }
    catch(error)
    {

    }
    

}
getQuotes();
newQuote.addEventListener('click', newQUOTE);
// function tweetQuote()
// {
//     const twitterURL=`https:/twitter.com/intent/tweet?text=${quote.textContent} - ${Author.textContent}`;
//     window.open(twitterURL, '_blank');

// }
twitterButton.addEventListener("click", ()=>
{
    let twitterURL=`https://twitter.com/intent/tweet?url=${quote.textContent} - ${Author.textContent}`;
    window.open(twitterURL, "_blank" );
});
// twitterButton.addEventListener('click', twitterURL);

linkedin.addEventListener("click", ()=>
{
    let linkedinURL=`https://www.linkedin.com/in/aamir-khan-b9650920b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByL3irBIjR4%2BThEPTSnMvgQ%3D%3D}`;
    window.open(linkedinURL, "_blank");
});