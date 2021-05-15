import React from 'react'
import { useSelector } from 'react-redux';

import { useTranslation } from "react-i18next";

const Share = ({ popUp, setPopUp }) => {

    const { t } = useTranslation();

    const gameInfo  = useSelector(store => store.resume.gameInfo)

    

    function printPdf() {
        
        
        var divQues = document.getElementById("questions").innerHTML;
        var divNotes = document.getElementById("notes").innerHTML;
            var printWindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

            printWindow.document.write('<html>');
            printWindow.document.write('<body style=" font-family: sans-serif">');
            printWindow.document.write(`<h3>Subject: ${gameInfo.theme} </h3>`);
            printWindow.document.write(`<h3>Played on: ${gameInfo.playedDate} </h3>`);
            printWindow.document.write(`<h3>Master: ${gameInfo.masterName} </h3>`);
            printWindow.document.write('<h3>Questions</h3 >');
            printWindow.document.write(divQues);
            printWindow.document.write('<h3>Notes</h3 >');
            printWindow.document.write(divNotes);
            printWindow.document.write('</body></html>');
            
            
            printWindow.document.close(); // necessary for IE >= 10
            printWindow.focus(); // necessary for IE >= 10*/

            printWindow.print();
            

            return true;
      }

    return (
        <div className="row d-flex justify-content-center pt-5" id="ignorePDF">
                            <div className="col-lg-8 col-sm-12 d-flex justify-content-around">
                            <div className="btn btn-dark btn-lg rounded-pill text-uppercase fw-bolder" 
                                onClick={printPdf} 
                                style={{width: '300px', padding: '10px'}} >
                                {t('download_pdf')}
                            </div>
                            <div className="btn btn-lg btn-success rounded-pill text-uppercase fw-bolder"
                                style={{width: '300px', padding: '10px'}}
                                onClick={() => setPopUp(!popUp)} >
                                {t('share')}
                            </div>
                            </div>
                            
        </div>
    )
}

export default Share
