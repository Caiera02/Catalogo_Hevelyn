function abrirWhatsApp(nomeProduto, referencia) {
            
            const numeroTelefone = '5511945059534'; 
            
            // Mensagem preenchida: codifica o texto para o formato URL
            const mensagem = encodeURIComponent(
                `Olá, tenho interesse no "${nomeProduto}" (Ref: ${referencia}). Gostaria de mais detalhes e informações sobre como comprar.`
            );

            const url = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
            
            // Abre o link em uma nova aba
            window.open(url, '_blank');
        }