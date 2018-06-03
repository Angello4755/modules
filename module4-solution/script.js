(function ()
{
  var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for ( name in names)
  {
    if(names[name].charAt(0).toLowerCase()=='j')
    {
       byeSpeaker.speak(names[name]);
    }else
    {
       helloSpeaker.speak(names[name]);
    }
  }
})();