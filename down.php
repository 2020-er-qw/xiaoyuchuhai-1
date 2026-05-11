<?php
// 定义允许的API密钥列表 
$valid_api_keys = [
    'wx-onecat2099', 
];

set_time_limit(0);
ini_set("memory_limit","-1");

// 验证API密钥
$api_key = $_GET['key'] ?? '';  // 从URL参数获取key
if (!in_array($api_key, $valid_api_keys)) {
    header('HTTP/1.0 403 Forbidden');
    die('访问被拒绝：无效的密钥');
}

if (!empty($_GET["url"])) {
    $url = $_GET["url"];

    // 获取文件信息
    $headers = get_headers($url, true);

    // 检查请求是否成功
    if (!$headers || strpos($headers[0], '200') === false) {
        header('HTTP/1.0 404 Not Found');
        die('无法获取文件或文件不存在');
    }

    // 获取内容类型
    $content_type = '';
    if (isset($headers['Content-Type'])) {
        $content_type = is_array($headers['Content-Type']) ? 
                        $headers['Content-Type'][0] : 
                        $headers['Content-Type'];
    }

    // 如果没有获取到内容类型，尝试从URL推断
    if (empty($content_type)) {
        $extension = pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
        switch (strtolower($extension)) {
            case 'jpg':
            case 'jpeg':
                $content_type = 'image/jpeg';
                break;
            case 'png':
                $content_type = 'image/png';
                break;
            case 'gif':
                $content_type = 'image/gif';
                break;
            case 'webp':
                $content_type = 'image/webp';
                break;
            case 'mp4':
                $content_type = 'video/mp4';
                break;
            case 'pdf':
                $content_type = 'application/pdf';
                break;
            default:
                $content_type = 'application/octet-stream';
        }
    }

    // 设置适当的内容类型头
    header("Content-Type: $content_type");

    // 获取文件大小并设置内容长度头
    if (isset($headers['Content-Length'])) {
        $content_length = is_array($headers['Content-Length']) ? 
                          $headers['Content-Length'][0] : 
                          $headers['Content-Length'];
        header("Content-Length: $content_length");
    }

    // 设置文件名，自动补全后缀
    $filename = basename(parse_url($url, PHP_URL_PATH));
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    if (empty($extension)) {
        // 根据内容类型补全扩展名
        switch ($content_type) {
            case 'image/jpeg': $filename .= '.jpg'; break;
            case 'image/png': $filename .= '.png'; break;
            case 'image/gif': $filename .= '.gif'; break;
            case 'image/webp': $filename .= '.webp'; break;
            case 'video/mp4': $filename .= '.mp4'; break;
            case 'application/pdf': $filename .= '.pdf'; break;
            default: $filename .= '.bin'; // 未知类型
        }
    }
    header('Content-Disposition: attachment; filename="' . $filename . '"');

    // 输出文件内容
    readfile($url);
} else {
    header('HTTP/1.0 400 Bad Request');
    die('缺少URL参数');
}
?>
