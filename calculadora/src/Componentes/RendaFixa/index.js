const RendaFixa = () => {
   return (
      <>
         <h1 className="m-4 text-center">Renda Fixa</h1>
         <p className="lead">Introdução Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>

         <div className="text-center">
            <div className="row">
               <div className="col-sm border">
                  <p>coluna</p>
               </div>
               <div className="col-md-9 col-sm-12">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  <h4> FGC, o que é?</h4>
                  <p>Pequeno texto explicando o que o orgão faz e cobertura máxima.</p>
                  <h4>Imposto de renda e IOF.</h4>
                  <p>Pequena explicação sobre o pagamento do imposto.</p>
                  <h4>Principais Ativos</h4>
                  <p>cita os ativos e breve explicação.</p>
                  <table className="table table-striped table-bordered">
                     <thead>
                        <tr>
                           <th>Ativo</th>
                           <th>FGC</th>
                           <th>IR</th>
                           <th>Credor</th>
                        </tr>
                     </thead>
                     <tbody className="table-group-divider">
                        <tr>
                           <th>CDB</th>
                           <th>X</th>
                           <th>X</th>
                           <th>Fianceiras</th>
                        </tr>
                        <tr>
                           <th>Tesouro</th>
                           <th>X</th>
                           <th>X</th>
                           <th>Governo</th>
                        </tr>
                        <tr>
                           <th>LCI</th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th>LCA</th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th>CRI</th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th>CRA</th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="col-sm border">
                  coluna 3
               </div>
            </div>
         </div>
      </>
   )
}
export default RendaFixa;