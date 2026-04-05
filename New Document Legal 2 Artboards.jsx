(function () {
    var legalWidth = 612;
    var legalHeight = 1008;
    var numArtboards = 2;

    var preset = new DocumentPreset();
    preset.colorMode = DocumentColorSpace.CMYK;
    preset.width = legalWidth;
    preset.height = legalHeight;
    preset.units = RulerUnits.Inches;
    preset.numArtboards = numArtboards;
    preset.artboardLayout = DocumentArtboardLayout.Row;
    preset.artboardSpacing = 20;

    var doc = app.documents.addDocument("Print", preset);

    for (var i = 0; i < doc.artboards.length; i++) {
        doc.artboards[i].name = "Artboard " + (i + 1);
    }

    alert("New document created with " + numArtboards + " artboards at Legal size (8.5 x 14 in).");
})();
