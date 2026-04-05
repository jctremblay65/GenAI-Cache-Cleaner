(function () {
    var doc = app.documents.add(
        DocumentColorSpace.CMYK,
        612,
        1008,
        2,
        DocumentArtboardLayout.Row,
        20,
        1
    );

    doc.artboards[0].name = "Artboard 1";
    doc.artboards[1].name = "Artboard 2";
})();
