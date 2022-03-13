import 'package:flutter/material.dart';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:math';

import 'package:qr_gen/screens/display_image.dart';
import 'package:qr_gen/screens/qr_page.dart';
import 'package:qr_gen/screens/track_order.dart';

class GenerateInvoice extends StatefulWidget {
  const GenerateInvoice({Key? key}) : super(key: key);

  @override
  State<GenerateInvoice> createState() => _GenerateInvoiceState();
}

class _GenerateInvoiceState extends State<GenerateInvoice> {
  var _isLoading = true;
  var _isInit = true;
  var data;
  String? _localPath;

  Future<void> getData() async {
    var url = 'https://loc-breaking-codes.herokuapp.com/api/orders';
    var response = await http.get(Uri.parse(url));
    var extractedData = json.decode(response.body) as List<dynamic>;
    print(extractedData);
    data = extractedData;
    setState(() {
      _isLoading = false;
    });
  }

  void requestDownload(int i) {
    Navigator.of(context)
        .pushNamed(DisplayImage.routeName, arguments: {'index': i});
  }

  @override
  void didChangeDependencies() {
    if (_isInit) {
      getData();
      _isInit = false;
    }
    super.didChangeDependencies();
  }

  void genQRScan(String id) {
    Navigator.of(context).pushNamed(QRPage.routeName, arguments: {'id': id});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Generate Invoice')),
      body: RefreshIndicator(
        onRefresh: getData,
        child: Container(
            child: _isLoading
                ? const Center(
                    child: CircularProgressIndicator(),
                  )
                : Container(
                    margin: const EdgeInsets.fromLTRB(10, 20, 10, 0),
                    child: ListView.builder(
                      itemBuilder: (ctx, i) {
                        return Card(
                          elevation: 5,
                          child: InkWell(
                            onTap: () {
                              Navigator.of(context)
                                  .pushNamed(TrackOrder.routeName);
                            },
                            child: ListTile(
                              title: Text(
                                data[i]['name'],
                                style: const TextStyle(
                                    fontSize: 15, fontWeight: FontWeight.bold),
                              ),
                              subtitle: Text(data[i]['sku'] == null
                                  ? 'N/A'
                                  : data[i]['sku']),
                              trailing: Container(
                                width: 215,
                                child: Row(
                                  children: [
                                    Text(
                                      'Completed: ' +
                                          data[i]['complete'].toString(),
                                      style: TextStyle(
                                          color: Colors.red,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 12),
                                    ),
                                    IconButton(
                                      icon: const Icon(Icons.qr_code),
                                      onPressed: () =>
                                          genQRScan(data[i]['_id']),
                                    ),
                                    IconButton(
                                      icon: const Icon(Icons.picture_as_pdf),
                                      onPressed: () => requestDownload(i),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        );
                      },
                      itemCount: data.length,
                    ),
                  )),
      ),
    );
  }
}
