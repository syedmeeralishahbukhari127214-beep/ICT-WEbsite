<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap - ICT</title>
				<style>
					body { font-family: -apple-system, sans-serif; color: #444; margin: 0; background: #f8f9fa; }
					#header { background: #0073a8; padding: 50px 20px; color: #fff; text-align: center; }
					#header h1 { margin: 0; font-size: 30px; }
					#header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
					#content { max-width: 1000px; margin: -40px auto 50px; background: #fff; padding: 25px; border-radius: 12px; shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eee; }
					table { width: 100%; border-collapse: collapse; }
					th { text-align: left; padding: 15px; border-bottom: 2px solid #f1f1f1; color: #0073a8; text-transform: uppercase; font-size: 13px; }
					td { padding: 15px; border-bottom: 1px solid #f9f9f9; font-size: 14px; word-break: break-all; }
					tr:hover { background: #fcfdfe; }
					a { color: #0073a8; text-decoration: none; font-weight: 500; }
					a:hover { text-decoration: underline; }
					.priority-badge { background: #eef4ff; color: #0073a8; padding: 3px 8px; border-radius: 4px; font-size: 12px; }
				</style>
			</head>
			<body>
				<div id="header">
					<h1>XML Sitemap</h1>
					<p>This sitemap contains all your static pages and dynamic Sanity content.</p>
				</div>
				<div id="content">
					<table>
						<thead>
							<tr>
								<th>URL (Loc)</th>
								<th>Priority</th>
								<th>Change Freq</th>
								<th>Last Modified</th>
							</tr>
						</thead>
						<tbody>
							<xsl:for-each select="sitemap:urlset/sitemap:url">
								<tr>
									<td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
									<td><span class="priority-badge"><xsl:value-of select="sitemap:priority"/></span></td>
									<td><xsl:value-of select="sitemap:changefreq"/></td>
									<td><xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/></td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>