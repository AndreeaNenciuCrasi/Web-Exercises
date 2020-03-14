window.onload = function () {
    // GET ALL THE PLAYERS - DRAGGABLE AND DROP ZONES
    var draggable = document.getElementById("draggable"),
        dropzones = document.getElementsByClassName("dropzone");

    // DRAG START - HIGHLIGHT DROP ZONES WITH CSS CLASS
    draggable.addEventListener("dragstart", function () {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.add("active");
        }
    });

    // DRAG END - REMOVE ALL ADDED ACTIVE & OVER CSS CLASS
    draggable.addEventListener("dragend", function () {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.remove("active");
            dropzones[i].classList.remove("over");
        }
    });

    // DRAG - AS YOU ARE DRAGGING
    draggable.addEventListener("drag", function () {
        // DO SOMETHING... IF YOU WANT
    });

    for (let i = 0; i < dropzones.length; i++) {
        // DRAG ENTER - HIGHLIGHT THIS ZONE
        dropzones[i].addEventListener("dragenter", function () {
            dropzones[i].classList.add("over");
        });

        // DRAG LEAVE - REMOVE HIGHLIGHT ON THIS ZONE
        dropzones[i].addEventListener("dragleave", function () {
            dropzones[i].classList.remove("over");
        });

        // DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
        dropzones[i].addEventListener("dragover", function (evt) {
            evt.preventDefault();
        });

        // ON DROP - MOVE THE DRAGGABLE ELEMENT
        dropzones[i].addEventListener("drop", function (evt) {
            evt.preventDefault();
            // Will move the draggable element only if dropped into a different box
            if (evt.target != draggable.parentNode && evt.target != draggable) {
                draggable.parentNode.removeChild(draggable);
                evt.target.appendChild(draggable);
            }
        });
    }
};

    // THE EVENTS
    // Remember that I mentioned we have to use a number of drag-and-drop related events in Javascript? Here it is, here is a list of events that we will be dealing with in the script:
    //
    // Event	Description
    // dragstart	Fired when the drag starts.
    // dragend	Fired when the drag stops.
    // drag	As the element is being dragged around.
    // dragenter	When the mouse enters the boundaries of an element.
    // dragover	As the element is being dragged over another element.
    // dragleave	When the mouse exits the boundaries of an element.
    // drop	Fired when the element is being dropped.
    //
    //
    // The Javascript looks like a handful to handle, but we are basically just dealing with all of the drag-drop events one-by-one:
    //
    // When the drag starts, we will add an active class to all the drop zones to highlight them.
    // The active class will be removed from all drop zones when the drag ends, along with the over class used in drag over.
    // As the draggable element enters a drop zone, an over CSS class will be added to further highlight the drop zone.
    // As the draggable element leaves a drop zone, the over CSS class will be removed.
    // On hovering the draggable over a drop zone, the default browser action will be prevented – This is used to program our own.
    // Finally, we simply move the draggable element into the dropped zone.