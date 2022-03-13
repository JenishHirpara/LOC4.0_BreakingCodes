import 'package:flutter/material.dart';

class DisplayImage extends StatefulWidget {
  static const routeName = '/display-image';
  const DisplayImage({Key? key}) : super(key: key);

  @override
  State<DisplayImage> createState() => _DisplayImageState();
}

class _DisplayImageState extends State<DisplayImage> {
  final _urls =
      'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/invoice.png?alt=media&token=19dd1fc2-d1fa-4249-b7f4-4813891827f3';

  @override
  Widget build(BuildContext context) {
    var data = ModalRoute.of(context)!.settings.arguments as Map<String, int>;
    return Scaffold(
        appBar: AppBar(
          title: const Text('Image'),
        ),
        body: Center(
          child: Container(
            width: 300,
            height: 400,
            color: Colors.yellow,
            child: Image.network(
              _urls,
              fit: BoxFit.cover,
            ),
          ),
        ));
  }
}
