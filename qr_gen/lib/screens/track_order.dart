import 'package:flutter/material.dart';

class TrackOrder extends StatefulWidget {
  static const routeName = 'track-order';
  const TrackOrder({Key? key}) : super(key: key);

  @override
  State<TrackOrder> createState() => _TrackOrderState();
}

class _TrackOrderState extends State<TrackOrder> {
  List<SampleStepTile> get steps {
    return [
      SampleStepTile(
        title: const Text(
          '1983, orders, \$4220',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontFamily: 'SourceSansPro',
            color: Color(0xff707070),
          ),
        ),
        date: '13 Mar 2022 01:16',
      ),
      SampleStepTile(
        title: const Text(
          '12 Invoices have been paid',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontFamily: 'SourceSansPro',
            color: Color(0xff707070),
          ),
        ),
        date: '12 Mar 2022 00:16',
      ),
      SampleStepTile(
        title: const Text(
          'Order #37745 from September',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontFamily: 'SourceSansPro',
            color: Color(0xff707070),
          ),
        ),
        date: '10 Mar 2022 23:16',
      ),
      SampleStepTile(
        title: const Text(
          'New order placed #XF-2356',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontFamily: 'SourceSansPro',
            color: Color(0xff707070),
          ),
        ),
        date: '09 Mar 2022 22:16',
      ),
      SampleStepTile(
        title: const Text(
          'New order placed #XF-2346',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontFamily: 'SourceSansPro',
            color: Color(0xff707070),
          ),
        ),
        date: '08 Mar 2022 21:16',
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Track Order'),
      ),
      body: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(20),
        child: ListView(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            ...steps.asMap().entries.map((entry) {
              int index = entry.key;
              SampleStepTile step = entry.value;
              return SizedBox(
                height: 110,
                child: Column(
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: <Widget>[
                        Expanded(
                          flex: 3,
                          child: SizedBox(
                            height: 110,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  step.date,
                                  style: const TextStyle(
                                    fontFamily: 'SourceSansPro',
                                    color: Color.fromRGBO(128, 128, 128, 1),
                                  ),
                                ),
                                // Text(
                                //   step.time,
                                //   style: TextStyle(
                                //     fontFamily: 'SourceSansPro',
                                //     color: Color.fromRGBO(
                                //         128, 128, 128, 1),
                                //   ),
                                // ),
                              ],
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 3,
                          child: SizedBox(
                            height: 110,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: <Widget>[
                                Icon(
                                  index < 3
                                      ? Icons.radio_button_checked
                                      : Icons.radio_button_unchecked,
                                  color: Theme.of(context).primaryColor,
                                  size: 20,
                                ),
                                index == 4
                                    ? Container()
                                    : SizedBox(
                                        height: 90,
                                        child: VerticalDivider(
                                          color: Theme.of(context).primaryColor,
                                          thickness: 2,
                                        ),
                                      ),
                              ],
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 4,
                          child: Container(
                            height: 110,
                            child: step.title,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              );
            }).toList(),
          ],
        ),
      ),
    );
  }
}

class SampleStepTile {
  SampleStepTile({
    Key? key,
    required this.title,
    required this.date,
  });

  Widget title;
  String date;
}
