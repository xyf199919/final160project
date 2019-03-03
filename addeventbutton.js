function addevent(){

  window.alert("ol");

  var ref = firebase.database().ref();
  var postsRef = ref.child("12345").child("xyf199919").child("events");
  var eventname = document.getElementById("eventname").value;
  var eventloc = document.getElementById("eventlocation").value;
  window.alert(eventloc);
  var eventdate = document.getElementById("eventdate").value;
  window.alert(eventdate);
  var eventstart = document.getElementById("eventstart").value;
  var eventend = document.getElementById("eventend").value;
  var newPostRef = postsRef.push({
    classname: eventname,
    date: eventdate,
    starttime: eventstart,
    endtime: eventend,
    location: eventloc
  });
  var eventid = newPostRef.key;
  window.alert(eventid);

  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}
