$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
    tbClientes = JSON.parse(tbClientes); // Converte string para objeto

		if(tbClientes == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	    tbClientes = [];
		}

		$("#formData").on("submit",function(){
			if(operacao == "A"){
			    return Adicionar(tbClientes);
			}else{
			    return Editar(tbClientes,indice_selecionado);
			}
		});

		Listar(tbClientes);

		$("#tableList").on("click", ".btnEditar", function(){
	    operacao = "E";
	    indice_selecionado = parseInt($(this).attr("alt"));
			var cli = JSON.parse(tbClientes[indice_selecionado]);
	    $("#id").val(cli.Codigo);
	    $("#txtname").val(cli.name);
	    $("#txtnumber").val(cli.number);
	    $("#txtEmail").val(cli.Email);
			$("#id").attr("readonly","readonly");
		  $("#txtname").focus();
		});

		$("#tableList").on("click", ".btnExcluir",function(){
	    indice_selecionado = parseInt($(this).attr("alt"));
			Excluir(tbClientes, indice_selecionado);
	    Listar(tbClientes);
		});
});

function Adicionar(tbClientes){

		var cliente = JSON.stringify({
        Codigo   : $("#id").val(),
        name     : $("#txtname").val(),
        number : $("#txtnumber").val(),
        Email    : $("#txtEmail").val()
    });
    tbClientes.push(cliente);
		console.log("tbClientes - " + tbClientes);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}

function Editar(tbClientes,indice_selecionado){
    tbClientes[indice_selecionado] = JSON.stringify({
            Codigo   : $("#id").val(),
            name     : $("#txtname").val(),
            number : $("#txtnumber").val(),
            Email    : $("#txtEmail").val()
        });//Altera o item selecionado na tabela
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir(tbClientes, indice_selecionado){
    tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");

}

function Listar(tbClientes){
    $("#tableList").html("");
    $("#tableList").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>id</th>"+
        "   <th>name</th>"+
        "   <th>number</th>"+
        "   <th>Email</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbClientes){
        var cli = JSON.parse(tbClientes[i]);
        $("#tableList tbody").append("<tr>");
        $("#tableList tbody").append("<td><img src='localStorage/edit.png' alt='"+i+"'class='btnEditar'/><img src='localStorage/delete.png' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tableList tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tableList tbody").append("<td>"+cli.name+"</td>");
        $("#tableList tbody").append("<td>"+cli.number+"</td>");
        $("#tableList tbody").append("<td>"+cli.Email+"</td>");
        $("#tableList tbody").append("</tr>");
    }
}
