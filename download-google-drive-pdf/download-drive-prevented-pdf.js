(function () {
  const downloadFile = () => {
    let jspdfEle = document.createElement('script');

    jspdfEle.onload = function () {
      let pdf = new jsPDF();
      let elements = document.getElementsByTagName('img');
      for (let i in elements) {
        let img = elements[i];
        if (!/^blob:/.test(img.src)) {
          continue;
        }
        let can = document.createElement('canvas');
        let con = can.getContext('2d');
        can.width = img.width;
        can.height = img.height;
        con.drawImage(img, 0, 0, img.width, img.height);
        let imgData = can.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
      }
  
      pdf.save('ITCoders-' + new Date().getTime() + '-decoded-file.pdf');
    };
  
    jspdfEle.src =
      'https' +
      '://' +
      'cdnjs' +
      '.cloudflare' +
      '.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
    document.body.appendChild(jspdfEle);
  }
  downloadFile();
})();
