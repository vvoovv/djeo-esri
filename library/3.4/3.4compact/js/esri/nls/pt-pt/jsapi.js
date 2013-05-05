/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/nls/pt-pt/jsapi",({io:{proxyNotSet:"esri.config.defaults.io.proxyUrl não está definido."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) está descontinuado. Utilize Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom está descontinuado. O comportamento de zoom Shift-Double-Click não será suportado."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint está descontinuado. Utilize esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint está descontinuado. Utilize esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"Não foi possível carregar o mosaico"},dynamic:{imageError:"Não foi possível carregar a imagem"},graphics:{drawingError:"Não foi possível desenhar o gráfico "},agstiled:{deprecateRoundrobin:"A opção de construtor 'roundrobin' está descontinuada. Utilize a opção 'tileServers'."},imageParameters:{deprecateBBox:"A propriedade 'bbox' está descontinuada. Utilize a propriedade 'extent'."},FeatureLayer:{noOIDField:"objectIdField não está definido [url: ${url}]",fieldNotFound:"não foi possível encontrar o campo '${field}' nas informações da camada 'fields' [url: ${url}]",noGeometryField:"não foi possível encontrar um campo do tipo 'esriFieldTypeGeometry' nas informações da camada 'fields'. Se estiver a utilizar uma camada de serviços de mapa, os elementos não terão geometria [url: ${url}]",invalidParams:"a solicitação contém um ou mais parâmetros não suportados",updateError:"ocorreu um erro ao atualizar a camada",createUserSeconds:"Criado por ${userId} segundos atrás",createUserMinute:"Criado por ${userId} um minuto atrás",editUserSeconds:"Editado por ${userId} segundos atrás",editUserMinute:"Editado por ${userId} um minuto atrás",createSeconds:"Criado segundos atrás",createMinute:"Criado um minuto atrás",editSeconds:"Editado segundos atrás",editMinute:"Editado um minuto atrás",createUserMinutes:"Criado por ${userId} ${minutes} minutos atrás",createUserHour:"Criado por ${userId} uma hora atrás",createUserHours:"Criado por ${userId} ${hours} horas atrás",createUserWeekDay:"Criado por ${userId} ${weekDay} às ${formattedTime}",createUserFull:"Criado por ${userId} em ${formattedDate} às ${formattedTime}",editUserMinutes:"Editado por ${userId} ${minutes} minutos atrás",editUserHour:"Editado por ${userId} uma hora atrás",editUserHours:"Editado por ${userId} ${hours} horas atrás",editUserWeekDay:"Editado por ${userId} ${weekDay} às ${formattedTime}",editUserFull:"Editado por ${userId} em ${formattedDate} às ${formattedTime}",createUser:"Criado por ${userId}",editUser:"Editado por ${userId}",createMinutes:"Criado ${minutes} minutos atrás",createHour:"Criado uma hora atrás",createHours:"Criado ${hours} horas atrás",createWeekDay:"Criado ${weekDay} às ${formattedTime}",createFull:"Criado em ${formattedDate} às ${formattedTime}",editMinutes:"Editado ${minutes} minutos atrás",editHour:"Editado uma hora atrás",editHours:"Editado ${hours} horas atrás",editWeekDay:"Editado ${weekDay} às ${formattedTime}",editFull:"Editado em ${formattedDate} às ${formattedTime}"}},tasks:{gp:{gpDataTypeNotHandled:"O tipo de Dados GP não foi alterado."},na:{route:{routeNameNotSpecified:"'RouteName' não definido para pelo menos 1 paragem no FeatureSet de paragens."}},query:{invalid:"Não foi possível realizar a solicitação. Verifique os seus parâmetros."}},toolbars:{draw:{convertAntiClockwisePolygon:"Os polígonos desenhados no sentido anti-horário serão convertidos para o sentido horário.",addPoint:"Clique para adicionar um ponto",addShape:"Clique para adicionar um elemento, ou mantenha o botão do rato pressionado para iniciar e liberte-o para terminar.",addMultipoint:"Clique para começar a adicionar pontos",freehand:"Pressione para começar e solte para finalizar",start:"Clique para começar a desenhar",resume:"Clique para continuar a desenhar",complete:"Clique duas vezes para concluir",finish:"Clique duas vezes para finalizar",invalidType:"Tipo de geometria não suportado"},edit:{invalidType:"Não foi possível ativar a ferramenta. Verifique se a ferramenta é válida para este tipo de geometria.",deleteLabel:"Eliminar"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"Uma BingMapsKey deverá ser fornecida."},vegeocode:{bingMapsKeyNotSpecified:"Uma BingMapsKey deverá ser fornecida.",requestQueued:"O token do servidor não foi obtido. O pedido será executado após a obtenção do token do servidor."}},widgets:{attributeInspector:{NLS_first:"Primeiro",NLS_previous:"Anterior",NLS_next:"Seguinte",NLS_last:"Último",NLS_deleteFeature:"Eliminar",NLS_title:"Editar Atributos",NLS_errorInvalid:"Não válido",NLS_validationInt:"O valor deve ser inteiro.",NLS_validationFlt:"O valor deve ser real.",NLS_of:"de",NLS_noFeaturesSelected:"Nenhum elemento selecionado"},overviewMap:{NLS_drag:"Arraste para Alterar a Extensão do Mapa",NLS_show:"Exibir Visão Geral do Mapa",NLS_hide:"Ocultar Visão Geral do Mapa",NLS_maximize:"Maximizar",NLS_restore:"Restaurar",NLS_noMap:"'map' não encontrado nos parâmetros de entrada",NLS_noLayer:"o mapa principal não possui uma camada base",NLS_invalidSR:"a referência espacial da camada não é compatível com o mapa principal",NLS_invalidType:"tipo de camada não suportado. Os tipos de camada válidos são 'TiledMapServiceLayer' e 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"Primeiro",NLS_previous:"Anterior",NLS_next:"Seguinte",NLS_play:"Reproduzir/Pausar",NLS_invalidTimeExtent:"TimeExtent não definido ou está num formato incorreto."},attachmentEditor:{NLS_attachments:"Anexos:",NLS_add:"Adicionar",NLS_none:"Nenhum",NLS_error:"Ocorreu um erro.",NLS_fileNotSupported:"Este tipo de serviço não é suportado."},directions:{error:{notEnoughStops:"Introduza uma origem e um destino.",unknownStop:"A localização '<name>' não foi encontrada.",routeTask:"Não foi possível calcular a rota para estes endereços.",locator:"A localização não foi encontrada.",invalidStopType:"Tipo de paragem não válido",locatorUndefined:"Não foi possível inverter o código geográfico. URL de localizador não definido.",noAddresses:"Não foram devolvidos endereços.",noStops:"Não foram disponibilizadas paragens para serem adicionadas.",maximumStops:"Foi atingido o número máximo de paragens"},time:{minute:"minuto",minutes:"minutos",hour:"hora",hours:"horas"},units:{KILOMETERS:{name:"quilómetros",abbr:"km."},METERS:{name:"metros",abbr:"m."},MILES:{name:"milhas",abbr:"mi."},NAUTICAL_MILES:{name:"milhas náuticas",abbr:"nm."}},showOptions:"Exibir opções",hideOptions:"Ocultar opções",findOptimalOrder:"Encontrar ordem ideal",returnToStart:"Voltar ao início",addDestination:"Adicionar destino",viewFullRoute:"Efetuar zoom para rota completa",getDirections:"Obter Direções",reverseDirections:"Inverter direções",print:"Imprimir",printNotes:"Introduzir notas aqui",printDisclaimer:"As direções são disponibilizadas apenas para fins de planeamento e estão sujeitas aos <a href='http://www.esri.com/legal/software-license' target='_blank'>termos de uso da Esri</a>. Podem existir condições rodoviárias dinâmicas que causam diferenças de precisão em relação às direções do utilizador e que é necessário ter em conta, juntamente com sinalização e restrições legais. O utilizador assume todos os riscos decorrentes do uso."},editor:{tools:{NLS_attributesLbl:"Atributos",NLS_cutLbl:"Cortar",NLS_deleteLbl:"Eliminar",NLS_extentLbl:"Extensão",NLS_freehandPolygonLbl:"Polígono À Mão Livre",NLS_freehandPolylineLbl:"Polilinha À Mão Livre",NLS_pointLbl:"Ponto",NLS_polygonLbl:"Polígono",NLS_polylineLbl:"Polilinha",NLS_reshapeLbl:"Redefinir",NLS_selectionNewLbl:"Nova seleção",NLS_selectionAddLbl:"Adicionar à seleção",NLS_selectionClearLbl:"Limpar seleção",NLS_selectionRemoveLbl:"Subtrair da seleção",NLS_selectionUnionLbl:"União",NLS_autoCompleteLbl:"Auto-completar",NLS_unionLbl:"União",NLS_rectangleLbl:"Retângulo",NLS_circleLbl:"Círculo",NLS_ellipseLbl:"Elipse",NLS_triangleLbl:"Triângulo",NLS_arrowLbl:"Seta",NLS_arrowLeftLbl:"Seta para a Esquerda",NLS_arrowUpLbl:"Seta para Cima",NLS_arrowDownLbl:"Seta para Baixo",NLS_arrowRightLbl:"Seta para a Direita",NLS_undoLbl:"Anular",NLS_redoLbl:"Refazer"}},Geocoder:{main:{clearButtonTitle:"Limpar Pesquisa",searchButtonTitle:"Pesquisar",geocoderMenuButtonTitle:"Alterar Geocodificador",geocoderMenuHeader:"Selecionar geocodificador",geocoderMenuCloseTitle:"Fechar Menu",untitledGeocoder:"Geocodificador sem nome"},esriGeocoderName:"Geocodificador Mundial Esri"},HistogramTimeSlider:{NLS_range:"Intervalo",NLS_cumulative:"Cumulativo",NLS_play:"Reproduzir/Pausar",NLS_invalidTimeExtent:"TimeExtent não definido ou está num formato incorreto.",NLS_overview:"OVERVIEW",NLS_range:"intervalo completo"},legend:{NLS_points:"Pontos",NLS_lines:"Linhas",NLS_polygons:"Polígonos",NLS_creatingLegend:"A criar legenda",NLS_noLegend:"Sem legenda"},popup:{NLS_moreInfo:"Mais informações",NLS_searching:"A Pesquisar",NLS_prevFeature:"Elemento anterior",NLS_nextFeature:"Elemento seguinte",NLS_close:"Fechar",NLS_prevMedia:"Media anterior",NLS_nextMedia:"Media seguinte",NLS_noInfo:"Nenhuma informação disponível",NLS_noAttach:"Nenhum anexo encontrado",NLS_maximize:"Maximizar",NLS_restore:"Restaurar",NLS_zoomTo:"Efetuar zoom para",NLS_pagingInfo:"(${index} de ${total})",NLS_attach:"Anexos"},measurement:{NLS_distance:"Distância",NLS_area:"Área",NLS_location:"Localização",NLS_resultLabel:"Resultado da Medição",NLS_length_miles:"Milhas",NLS_length_kilometers:"Quilómetros",NLS_length_feet:"Pés",NLS_length_meters:"Metros",NLS_length_yards:"Jardas",NLS_area_acres:"Acres",NLS_area_sq_miles:"Milhas Quadradas",NLS_area_sq_kilometers:"Quilómetros Quadrados",NLS_area_hectares:"Hectares",NLS_area_sq_yards:"Jardas Quadradas",NLS_area_sq_feet:"Pés Quadrados",NLS_area_sq_meters:"Metros Quadrados",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"Graus",NLS_map_coordinate:"Coordenada do mapa",NLS_longitude:"Longitude",NLS_latitude:"Latitude"},bookmarks:{NLS_add_bookmark:"Adicionar Marcador",NLS_new_bookmark:"Sem título",NLS_bookmark_edit:"Editar",NLS_bookmark_remove:"Remover"},print:{NLS_print:"Imprimir",NLS_printing:"A Imprimir",NLS_printout:"Impressão"},templatePicker:{creationDisabled:"A criação de elementos encontra-se inativa para todas as camadas.",loading:"A Carregar..."}},arcgis:{utils:{baseLayerError:"Não foi possível carregar a camada base do mapa",geometryServiceError:"Forneça um serviço de geometria para abrir o Mapa Web."}},identity:{lblItem:"item",title:"Iniciar sessão",info:"Inicie sessão para aceder ao item em ${server} ${resource}",lblUser:"Nome de Utilizador:",lblPwd:"Palavra-passe:",lblOk:"OK",lblSigning:"A Iniciar Sessão…",lblCancel:"Cancelar",errorMsg:"Nome de utilizador / palavra-passe não válidos. Tente novamente.",invalidUser:"O nome de utilizador ou palavra-passe que introduziu está incorreto.",forbidden:"O nome de utilizador e palavra-passe são válidos mas não tem permissões para aceder a este recurso.",noAuthService:"Não foi possível aceder ao serviço de autenticação."},common:{cancel:"Cancelar",ok:"OK",create:"Criar",close:"Fechar",done:"Concluído",apply:"Aplicar",remove:"Remover",open:"Abrir",edit:"Editar",share:"Partilhar",save:"Guardar",help:"Ajuda",warning:"Aviso",deleteLabel:"Eliminar",titleLabel:"Título:",newLabel:"Novo",arcgis:"ArcGIS",previous:"Anterior",submit:"Enviar",next:"Seguinte",yesLabel:"Sim",noLabel:"Não",errorTitle:"Erro",upload:"Carregar",sum:"Soma",minimum:"Mínimo",maximum:"Máximo",average:"Média",standardDev:"Desvio Padrão",statistic:"Estatística",attribute:"Atributo",selectAttribute:"Selecionar atributo",runAnalysis:"Executar Análise",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",outputnameMissingMsg:"É necessário um nome de saída",miles:"Milha(s)",kilometers:"Quilómetro(s)",meters:"Metro(s)",feet:"Pé(s)",degree:"Grau(s) Decimal(ais)",inches:"Polegada(s)",nautMiles:"Milha(s) Náutica(s)",pointsUnit:"Ponto(s)",yards:"Jarda(s)",comingSoonLabel:"Disponível Em Breve!"},analysisTools:{performAnalysis:"Efetuar Análise",summarizeData:"Resumir Dados",findLocations:"Encontrar Localizações",aggregateTool:"Agregar Pontos",bufferTool:"Dados de Buffer",dataEnrichment:"Data Enrichment",analyzePatterns:"Analisar Padrões",useProximity:"Utilizar Proximidade",manageData:"Gerir Dados",aggregateToolName:"Agregar Pontos",bufferToolName:"Criar Buffers",summarizeWithin:"Resumir Dentro",sumnearby:"Resumir Próximo",createBuffers:"Criar Buffers",driveTimes:"Criar Polígonos de Tempo de Condução",findExistingLocations:"Encontrar Localizações Existentes",findNewLocations:"Derivar Novas Localizações",geoenrichLayer:"Melhorar Elementos",findRoute:"Localizar Rota",findClosestFacility:"Localizar Mais Próximos",generateFleetPlan:"Gerar plano de Encaminhamento de Frota",findHotSpots:"Localizar Hot Spots",createDensitySurface:"Criar superfície de densidade",correlationReporter:"Explorar Correlações",createInterpolatedSurface:"Criar Superfície",attributeCalculator:"Calculadora de Atributos",overlayLayers:"Sobrepor Camadas",mergeLayers:"Juntar Camadas",dissolveBoundaries:"Dissolver Limites",extractData:"Extrair Dados",orgUsrMsg:"Tem de ser um membro de uma organização para executar este serviço.",pubRoleMsg:"À sua conta online não foi atribuída a função de Publicador.",servNameExists:"Já tem um resultado com este nome. Mude o nome do resultado e reenvie a análise.",outputLayerLabel:"Nome da camada de resultado",outputFileName:"Nome do ficheiro de saída",emptyResultInfoMsg:"The result of your analysis did not return any features. No layer will be created."},aggregatePointsTool:{aggregateDefine:"Contar <b>${layername}</b> dentro",outputLayerName:"Agregação de ${pointlayername} a ${polygonlayername}",groupByLabel:"Selecionar atributo para agrupar por (opcional)",itemDescription:"Serviço de Elementos gerado a partir da execução das soluções de Agregar Pontos. Pontos do ficheiro csv ${pointlayername} foram agregados a ${polygonlayername}",itemTags:"Análise, Agregar Pontos, ${pointlayername}, ${polygonlayername}",itemSnippet:"Serviço de Elementos de Análise gerado a partir de Agregar Pontos",removeAttrStats:"Remover Estatísticas de Atributo",keepPolygonLabel:"Manter polígonos sem pontos",addStatsLabel:"Adicionar estatística (opcional)",chooseAreaLabel:"Selecionar área"},findHotSpotsTool:{hotspotsPolyDefine:"Analisar <b>${layername}</b> para localizar Hot e Cold Spots estatisticamente significativos ",hotspotsPointDefine:"Analisar <b>${layername}</b> para localizar Hot e Cold Spots estatisticamente significativos ",fieldLabel:"com ou sem um campo de análise",noAnalysisField:"Nenhum Campo de Análise",hotspots:"Hot Spots",outputLayerName:"Hot Spots ${layername}",Options:"Opções",defineBoundingLabel:"Definir onde são possíveis incidentes",provideAggLabel:"Fornecer áreas de agregação para resumo de incidentes",defaultBoundingOption:"Selecionar áreas delimitadoras",defaultAggregationOption:"Selecionar áreas de agregação",itemDescription:"Serviço de Elementos gerado a partir da execução da solução Localizar Hot Spots.",itemTags:"Análise, Hot Spots, ${layername}, ${fieldname}",itemSnippet:"Serviço de Elementos de Análise gerado a partir de Localizar Hot Spots",chooseAttributeLabel:"Selecionar um campo de análise",blayerName:"Limites Desenhados"},overlayLayersTool:{overlayDefine:"Sobrepor <b>${layername}</b> em",chooseOverlayLayer:"Selecionar camada de sobreposição",chooseOverlayMethod:"Selecionar método de sobreposição",itemDescription:"Serviço de Elementos gerado a partir da execução da solução Sobrepor camadas.",itemTags:"Análise, Sobrepor camadas, ${layername}",itemSnippet:"Serviço de Elementos de Análise gerado a partir de Sobrepor camadas",unionOutputLyrName:"união de ${layername} e ${overlayname}",intersectOutputLyrName:"interseção de ${layername} e ${overlayname}",eraseOutputLyrName:"apagar ${layername} com ${overlayname}",overlayLayerPolyMsg:"A camada de Sobreposição deve ser uma Camada de Polígono para sobreposição de União",notSupportedEraseOverlayMsg:"Esta camada de Sobreposição não é suportada para sobreposição de Apagar. É aplicada a definição padrão de sobreposição de Intersetar.",intersect:"Intersetar",union:"União",erase:"Apagar"},bufferTool:{bufferDefine:"Criar buffers a partir de <b>${layername}</b>",outputLayerName:"Buffer de ${layername}",sizeLabel:"Introduzir tamanho de buffer",sizeHelp:"Para criar vários buffers, introduza as distâncias separadas por espaços (2 3 5.5).",typeLabel:"Tipo de buffer",resultLabel:"Nome da camada de resultado",optionsLabel:"Opções",itemDescription:"Serviço de Elementos gerado a partir da execução da solução Elementos de Buffer. Os dados de input de ${layername} foram colocados em buffer por ${distance_field} ${units}",itemTags:"Buffer, ${layername}",itemSnippet:"Serviço de Elementos de Análise gerado a partir de Buffer",overlap:"Sobrepor",dissolve:"Dissolver",include:"Incluir",exclude:"Excluir",around:"À Volta",sideType:"Tipo de lado",endType:"Tipo de fim",left:"Esquerda",right:"Direita",round:"Redondo",flat:"Liso",multipleDistance:"Vários buffers de distância devem ser",rings:"Anéis",disks:"Discos",areaofInputPoly:"Área de polígonos de input em polígonos de buffer",distanceMsg:"Só são permitidos valores numéricos",distance:"Distância",field:"Campo"},driveTimes:{toolDefine:"Criar áreas à volta de <b>${layername}</b>",outputLayerName:"Conduzir desde ${layername}: ---",measureLabel:"Medir:",measureHelp:"Para gerar várias áreas para cada ponto, introduza tamanhos separados por espaços (2 3.5 5)",areaLabel:"Áreas a partir de pontos diferentes:",trafficLabel:"Utilizar condições de trânsito (opcional)",resultLabel:"Nome da camada de resultado",itemDescription:"Serviço de Elementos gerado a partir da execução da solução Criar Tempos de Condução.",itemTags:"Tempos de Condução, ${layername}",itemSnippet:"Serviço de Elementos de Análise gerado a partir de Criar Tempos de Condução"},extractDataTool:{layersToExtract:"Camadas a extrair",studyArea:"Área de estudo",outputDataFormat:"Formato dos dados de saída",filegdb:"File geodatabase",shpFile:"Shapefile",lyrpkg:"Pacote de camada",selectFtrs:"Selecionar elementos",clipFtrs:"Cortar elementos",sameAsDisplay:"Igual à Visualização",sameAsLayer:"Igual a ${layername}",outputfileName:"OutputName.zip",itemDescription:"Ficheiro gerado a partir da execução da solução Extrair Dados.",itemTags:"Análise, Extrair Dados",itemSnippet:"Item de Ficheiro de Análise gerado a partir de Extrair Dados"}}));