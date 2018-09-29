# Animal Site Group Project

## Brief
You and your team are competing for a contract. You're working to produce an educational website for different types of animals. It's up to you to find the correct types of animals (meaning, there shouldn't be any reptiles under 'land mammals') and generate the content (copy [text] and pictures).

## Set up (15 minutes)
1. Copy these files into a shared folder for your group.
2. Use that shared folder to collaborate on this assignment.
3. Look at the sheet I've given you; discuss the different components you'll need to build this site. Make notes.
4. Divide up the tasks to complete this assignment.
  * e.g., build layout for 'Water Animals'
  * e.g., find content for 'Water Animals'
5. Write each task on a sticky notes.
6. Place your sticky notes on the whiteboard on the appropriate row for your group.

## Build (55 minutes)
You and your team have forty-five minutes to build this site, complete with content.

It's up to you how you want to divide and conquer, but **everyone** must contribute.

As you complete a task, move it to the appropriate column on the whiteboard. This will help you keep track of what's been completed and what still needs to be done **and** will help us know who is in the lead!

## Cheatsheet
If you need some help, here's the following elements that will need to be included in order to successfully complete this assignment:
```HTML
<nav> note: I'm giving you the HTML for this below...
<a>
<button>
<span>
<div>
<ul>
<li>
<p>
<jumbotron>
<container>
<card> and everything associated with a card...
<class>
<img>
```

## Navbar
This is kind of tough and we haven't talked about everything included here, so I'm giving it to you for free. There's comments in the code that tell you what you need to copy and paste to reproduce the same navbar on each page.

```HTML
<!-- You'll need to copy evertyhing between here and the next comment for your navbar to work -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/index.html">Animals</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="/index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/landMammals.html">Land Mammals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/waterAnimals.html">Water Animals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/birdsOfPrey.html">Birds of Prey</a>
      </li>
    </ul>
  </div>
</nav>
<!-- Navbar ends here -->
```
