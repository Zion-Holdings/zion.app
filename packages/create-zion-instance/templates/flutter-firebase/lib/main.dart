import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Zion Flutter Starter',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const JobsPage(),
    );
  }
}

class JobsPage extends StatefulWidget {
  const JobsPage({super.key});
  @override
  State<JobsPage> createState() => _JobsPageState();
}

class _JobsPageState extends State<JobsPage> {
  List jobs = [];
  bool loading = true;

  @override
  void initState() {
    super.initState();
    _loadJobs();
  }

  Future<void> _loadJobs() async {
    final url = const String.fromEnvironment('ZION_API_URL', defaultValue: 'https://api.zion.example');
    final res = await http.get(Uri.parse('$url/marketplace/jobs'));
    if (res.statusCode == 200) {
      setState(() {
        jobs = json.decode(res.body) as List;
        loading = false;
      });
    } else {
      setState(() => loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Zion Jobs')),
      body: loading
          ? const Center(child: CircularProgressIndicator())
          : ListView.builder(
              itemCount: jobs.length,
              itemBuilder: (context, index) => ListTile(
                title: Text(jobs[index]['title'] ?? 'Untitled'),
              ),
            ),
    );
  }
}