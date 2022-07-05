var downloadButton = document.getElementById('print-report');
downloadButton.onclick = printReport;

var reportPage = document.getElementById('page-body');

function printReport() {
  domtoimage.toBlob(reportPage)
    .then(function (blob) {
      window.saveAs(blob, 'bug-report.png');
    });
}
