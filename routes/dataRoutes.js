const XLSX = require("xlsx");
const csv = require("csv-parser");
const fs = require("fs");


app.post("/upload", upload.single("file"), (req, res) => {
    const filePath = req.file.path;
    const ext = filePath.split(".").pop().toLowerCase();
    if (ext === "xlsx") {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      Data.insertMany(sheetData)
        .then(() => {
          res.status(200).send("Data uploaded successfully.");
        })
        .catch((error) => {
          res.status(500).send("Error uploading data.");
        });
    } else if (ext === "csv") {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          Data.insertMany(results)
            .then(() => {
              res.status(200).send("Data uploaded successfully.");
            })
            .catch((error) => {
              res.status(500).send("Error uploading data.");
            });
        });
    } else {
      res.status(400).send("Unsupported file format.");
    }
  });