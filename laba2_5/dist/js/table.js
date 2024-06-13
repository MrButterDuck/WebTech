table_data =[
{'Name': 'GeForce RTX 4090', 'graph_proc': 'AD102', 'year': '2022', 'wire': 'PCIe 4.0 x16', 'memory': '24 GB, GDDR6', 'MHz_proc': '2235', 'MHz_memory': '1313', 'Shaders': '16384'},
{'Name': 'Radeon RX 580', 'graph_proc': 'Polaris 20', 'year': '2017', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR5', 'MHz_proc': '1257', 'MHz_memory': '2000', 'Shaders': '2304'},
{'Name': 'GeForce RTX 4070', 'graph_proc': 'AD104', 'year': '2023', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '1920', 'MHz_memory': '1313', 'Shaders': '5888'},
{'Name': 'GeForce RTX 3060 12 GB', 'graph_proc': 'GA106', 'year': '2021', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '1320', 'MHz_memory': '1875', 'Shaders': '35842'},
{'Name': 'GeForce RTX 4060', 'graph_proc': 'AD107', 'year': '2023', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '1830', 'MHz_memory': '2125', 'Shaders': '3070'},
{'Name': 'Radeon RX 7800 XT', 'graph_proc': 'Navi 32', 'year': '2023', 'wire': 'PCIe 4.0 x16', 'memory': '16 GB, GDDR6', 'MHz_proc': '1295', 'MHz_memory': '2438', 'Shaders': '3840'},
{'Name': 'GeForce RTX 4070 Ti', 'graph_proc': 'AD104', 'year': '2023', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '2310', 'MHz_memory': '1313', 'Shaders': '7680'},
{'Name': 'GeForce RTX 3060 Ti', 'graph_proc': 'GA104', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1410', 'MHz_memory': '1750', 'Shaders': '4864'},
{'Name': 'GeForce RTX 3070', 'graph_proc': 'GA104', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1500', 'MHz_memory': '1750', 
'Shaders': '5888'},
{'Name': 'GeForce RTX 4060 Ti 8 GB', 'graph_proc': 'AD106', 'year': '2023', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '2310', 'MHz_memory': '2250', 'Shaders': '4352'},
{'Name': 'GeForce GTX 1650', 'graph_proc': 'TU117', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '4 GB, GDDR5', 'MHz_proc': '1485', 'MHz_memory': '2001', 
'Shaders': '8962'},
{'Name': 'Radeon RX 6700 XT', 'graph_proc': 'Navi 22', 'year': '2021', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '2321', 'MHz_memory': '2000', 'Shaders': '2560'},
{'Name': 'GeForce RTX 2060', 'graph_proc': 'TU106', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '6 GB, GDDR6', 'MHz_proc': '1365', 'MHz_memory': '1750', 
'Shaders': '1920'},
{'Name': 'Radeon RX 5700 XT', 'graph_proc': 'Navi 10', 'year': '2019', 'wire': 'PCIe 4.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1605', 'MHz_memory': '1750', 'Shaders': '2560'},
{'Name': 'Radeon RX 6600', 'graph_proc': 'Navi 23', 'year': '2021', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '1626', 'MHz_memory': '1750', 'Shaders': '1792'},
{'Name': 'GeForce GTX 1660 SUPER', 'graph_proc': 'TU116', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '6 GB, GDDR6', 'MHz_proc': '1530', 'MHz_memory': '1750', 'Shaders': '1408'},
{'Name': 'GeForce RTX 4080', 'graph_proc': 'AD103', 'year': '2022', 'wire': 'PCIe 4.0 x16', 'memory': '16 GB, GDDR6', 'MHz_proc': '2205', 'MHz_memory': '1400', 'Shaders': '9722'},
{'Name': 'Radeon RX 7600', 'graph_proc': 'Navi 33', 'year': '2023', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '1720', 'MHz_memory': '2250', 'Shaders': '2048'},
{'Name': 'Radeon RX 7900 XTX', 'graph_proc': 'Navi 31', 'year': '2022', 'wire': 'PCIe 4.0 x16', 'memory': '24 GB, GDDR6', 'MHz_proc': '1855', 'MHz_memory': '2500', 'Shaders': '6142'},
{'Name': 'GeForce RTX 3080', 'graph_proc': 'GA102', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '10 GB, GDDR6', 'MHz_proc': '1440', 'MHz_memory': '1188', 'Shaders': '8704'},
{'Name': 'GeForce GTX 1080 Ti', 'graph_proc': 'GP102', 'year': '2017', 'wire': 'PCIe 3.0 x16', 'memory': '11 GB, GDDR5', 'MHz_proc': '1481', 'MHz_memory': '1376', 'Shaders': '35844'},
{'Name': 'Radeon RX 570', 'graph_proc': 'Polaris 20', 'year': '2017', 'wire': 'PCIe 3.0 x16', 'memory': '4 GB, GDDR5', 'MHz_proc': '1168', 'MHz_memory': '1750', 'Shaders': '2048'},
{'Name': 'GeForce GTX 1060 6 GB', 'graph_proc': 'GP106', 'year': '2016', 'wire': 'PCIe 3.0 x16', 'memory': '6 GB, GDDR5', 'MHz_proc': '1506', 'MHz_memory': '2002', 'Shaders': '1280'},
{'Name': 'GeForce GTX 1050 Ti', 'graph_proc': 'GP107', 'year': '2016', 'wire': 'PCIe 3.0 x16', 'memory': '4 GB, GDDR5', 'MHz_proc': '1291', 'MHz_memory': '1752', 'Shaders': '7684'},
{'Name': 'GeForce RTX 3050 8 GB', 'graph_proc': 'GA106', 'year': '2022', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '1552', 'MHz_memory': '1750', 'Shaders': '2560'},
{'Name': 'Radeon RX 580 2048SP', 'graph_proc': 'Polaris 20', 'year': '2018', 'wire': 'PCIe 3.0 x16', 'memory': '4 GB, GDDR5', 'MHz_proc': '1168', 'MHz_memory': 
'1750', 'Shaders': '2048'},
{'Name': 'Radeon RX 7700 XT', 'graph_proc': 'Navi 32', 'year': '2023', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '1700', 'MHz_memory': '2250', 'Shaders': '3456'},
{'Name': 'GeForce GTX 970', 'graph_proc': 'GM204', 'year': '2014', 'wire': 'PCIe 3.0 x16', 'memory': '4 GB, GDDR5', 'MHz_proc': '1410', 'MHz_memory': '1753', 'Shaders': '1664'},
{'Name': 'GeForce RTX 2080 Ti', 'graph_proc': 'TU102', 'year': '2018', 'wire': 'PCIe 3.0 x16', 'memory': '11 GB, GDDR6', 'MHz_proc': '1350', 'MHz_memory': '1750', 'Shaders': '4352'},
{'Name': 'GeForce RTX 2060 SUPER', 'graph_proc': 'TU106', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1470', 'MHz_memory': '1750', 'Shaders': '2176'},
{'Name': 'GeForce RTX 3090', 'graph_proc': 'GA102', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '24 GB, GDDR6', 'MHz_proc': '1395', 'MHz_memory': '1219', 'Shaders': '10496'},
{'Name': 'GeForce GTX 1070', 'graph_proc': 'GP104', 'year': '2016', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR5', 'MHz_proc': '1506', 'MHz_memory': '2002', 
'Shaders': '1920'},
{'Name': 'GeForce RTX 4050', 'graph_proc': 'AD107', 'year': '2023', 'wire': 'PCIe 4.0 x8', 'memory': '6 GB, GDDR', 'MHz_proc': '2505', 'MHz_memory': '2250', 'Shaders': '2560'},
{'Name': 'Radeon RX 6600 XT', 'graph_proc': 'Navi 23', 'year': '2021', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '1968', 'MHz_memory': '2000', 'Shaders': '2048'},
{'Name': 'Arc A580', 'graph_proc': 'DG2-512', 'year': '2023', 'wire': 'PCIe 4.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1700', 'MHz_memory': '2000', 'Shaders': '3072'},
{'Name': 'GeForce RTX 3070 Ti', 'graph_proc': 'GA104', 'year': '2021', 'wire': 'PCIe 4.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1575', 'MHz_memory': '1188', 'Shaders': '6144'},
{'Name': 'GeForce GTX 1660 Ti', 'graph_proc': 'TU116', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '6 GB, GDDR6', 'MHz_proc': '1500', 'MHz_memory': '1500', 'Shaders': '1536'},
{'Name': 'GeForce GTX 1080', 'graph_proc': 'GP104', 'year': '2016', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR5', 'MHz_proc': '1607', 'MHz_memory': '1251', 
'Shaders': '2560'},
{'Name': 'Radeon RX 6750 XT', 'graph_proc': 'Navi 22', 'year': '2022', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '2150', 'MHz_memory': '2250', 'Shaders': '2560'},
{'Name': 'GeForce GTX 960', 'graph_proc': 'GM206', 'year': '2015', 'wire': 'PCIe 3.0 x16', 'memory': '2 GB, GDDR5', 'MHz_proc': '1500', 'MHz_memory': '1753', 'Shaders': '1024'},
{'Name': 'Radeon RX 6650 XT', 'graph_proc': 'Navi 23', 'year': '2022', 'wire': 'PCIe 4.0 x8', 'memory': '8 GB, GDDR6', 'MHz_proc': '2055', 'MHz_memory': '2190', 'Shaders': '2048'},
{'Name': 'GeForce RTX 3080 Ti', 'graph_proc': 'GA102', 'year': '2021', 'wire': 'PCIe 4.0 x16', 'memory': '12 GB, GDDR6', 'MHz_proc': '1365', 'MHz_memory': '1188', 'Shaders': '10240'},
{'Name': 'Radeon RX 6800 XT', 'graph_proc': 'Navi 21', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '16 GB, GDDR6', 'MHz_proc': '1825', 'MHz_memory': '2000', 'Shaders': '4608'},
{'Name': 'GeForce RTX 2070', 'graph_proc': 'TU106', 'year': '2018', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1510', 'MHz_memory': '1750', 
'Shaders': '2304'},
{'Name': 'Radeon RX 5600 XT', 'graph_proc': 'Navi 10', 'year': '2020', 'wire': 'PCIe 4.0 x16', 'memory': '6 GB, GDDR6', 'MHz_proc': '1130', 'MHz_memory': '1500', 'Shaders': '2304'},
{'Name': 'GeForce GTX 750 Ti', 'graph_proc': 'GM107', 'year': '2014', 'wire': 'PCIe 3.0 x16', 'memory': '2 GB, GDDR5', 'MHz_proc': '1020', 'MHz_memory': '1350', 'Shaders': '640'},
{'Name': 'GeForce RTX 2070 SUPER', 'graph_proc': 'TU104', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '8 GB, GDDR6', 'MHz_proc': '1605', 'MHz_memory': '1750', 'Shaders': '2560'},
{'Name': 'Radeon RX 7900 XT', 'graph_proc': 'Navi 31', 'year': '2022', 'wire': 'PCIe 4.0 x16', 'memory': '20 GB, GDDR6', 'MHz_proc': '1500', 'MHz_memory': '2500', 'Shaders': '5376'},
{'Name': 'GeForce GTX 1660', 'graph_proc': 'TU116', 'year': '2019', 'wire': 'PCIe 3.0 x16', 'memory': '6 GB, GDDR5', 'MHz_proc': '1530', 'MHz_memory': '2001', 
'Shaders': '1408'}]

let correspond = {
    "graph_proc": "graph_proc",
    "wire": "wire",
    "memory": "memory",
    "shadersFrom": "Shaders",
    "shadersTo": "Shaders",
    "yearFrom": "year",
    "yearTo": "year",
    "MHz_procFrom": "MHz_proc",
    "MHz_procTo": "MHz_proc",
    "MHz_memoryFrom": "MHz_memory",
    "MHz_memoryTo": "MHz_memory"
}

let sortOpt = {
    'Name': 'Наименование', 
    'graph_proc': 'Графиеский процессор', 
    'year': 'Год выпуска', 
    'wire': 'Шина', 
    'memory': 'Память',
    'MHz_proc': 'Тактирование процессора', 
    'MHz_memory': 'Тактирование память', 
    'Shaders': "Шейдеры"}

let selectedOptions = {}

const marginX = 70;
const marginY = 70;
const height = 400;
const width = 700;
let svg = d3.select("svg").attr("height", height).attr("width", width).attr('display','none');
