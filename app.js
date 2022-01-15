
var deck = Deck();
const faceCards = ["JS", "JH", "JC", "JD", "QS", "QH", "QC", "QD", "KS", "KH", "KC", "KD"];
shuffle(faceCards);

function Deck(){
  var cards = [];
  for (var i =1; i <=52; i++){
    cards.push(i);
  }

  shuffle(cards);
  return cards;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//SlideDown of RULES
var $div = $('#rules1');
var height = $div.height();
$div.hide().css({ height : 0 });

$("#rulesbtn").click(function () {
  if ( $div.is(':visible') ) {
    $div.animate({ height: 0 }, { duration: 500, complete: function () {
        $div.hide();
      }
    });
  } else {
    $div.show().animate({ height : height }, { duration: 500 });
  }

  return false;
});

//PICK A CARD BUTTON
$("#b1").click(function(){
  changeCard();
  $("#num").html(deck.length + " " + "Cards Remaining");
});


function changeCard() {
  var LastCard = deck[deck.length -1];
  var id = matchImage(LastCard);
  $("#cardPic").attr("src", "https://deckofcardsapi.com/static/img/" + id + ".png");
  deck.pop();
  var cardRank = "#" + id[0];
  $("#displayrule").text($(cardRank).val());

}

//RESET BUTTON
$("#b2").click(function(){
  deck = Deck();
  $("#cardPic").attr("src","images/BackofDeck.jpg");
  $("#num").html("52 Cards Remaining");
  $("#displayrule").html("Rule");
})

//single digit = spades, 10s = hearts, 20s = clover, 30s = diamond, 41-44= jacks (spade, heart, clover, diamond), 45-48 = queens ,49-52=kings
function matchImage(LastCard){
  //SPADES ACE TO 10
  if (LastCard < 11){
    if (LastCard == 1) {
      return "AS";
    }
    if (LastCard == 10) {
      return "0S";
    }
    return LastCard.toString() + "S";}

  //HEARTS ACE TO 10
  else if (LastCard < 21){
    var newcard = LastCard - 10;
    if (newcard == 1) {
      return "AH";
    }
    if (newcard == 10) {
      newcard -= 10;
    }
    return newcard.toString() + "H";}

  //CLOVERS ACE TO 10
  else if (LastCard < 31){
    var newcard = LastCard - 20;
    if (newcard == 1) {
      return "AC";
    }
    if (newcard == 10) {
      newcard -= 10;
    }
    return newcard.toString() + "C";}

  //DIAMONDS ACE TO 10
  else if (LastCard < 41){
    var newcard = LastCard - 30;
    if (newcard == 1) {
      return "aceDiamonds";
    }
    if (newcard == 10) {
      newcard -= 10;
    }
    return newcard.toString() + "D";}

    //FACECARDS
    else if (41<= LastCard <= 52){
      var result = faceCards[faceCards.length - 1];
      faceCards.pop();
      return result;
      }

  }
